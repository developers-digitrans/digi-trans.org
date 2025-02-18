#!/bin/bash

# Exit on error
set -e

# Load environment variables
if [ -f .env ]; then
    source .env
fi

# Check required AWS CLI environment variables
if [ -z "$AWS_ACCESS_KEY_ID" ] || [ -z "$AWS_SECRET_ACCESS_KEY" ] || [ -z "$AWS_DEFAULT_REGION" ]; then
    echo "Error: AWS credentials not set. Please set AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, and AWS_DEFAULT_REGION"
    exit 1
fi

# Required variables
AMI_ID="ami-0c7217cdde317cfec"  # Amazon Linux 2023 AMI
INSTANCE_TYPE="t2.micro"
KEY_NAME="your-key-pair-name"  # Replace with your key pair name
PROJECT_NAME="digitrans"
DOMAIN_NAME="yourdomain.com"  # Replace with your domain

echo "🚀 Starting deployment process..."

# 1. Create security groups
echo "📦 Setting up security groups..."
source ./security-group.sh
SECURITY_GROUP_ID=$SECURITY_GROUP_ID

# 2. Launch EC2 instance
echo "🖥️ Launching EC2 instance..."
INSTANCE_ID=$(aws ec2 run-instances \
    --image-id $AMI_ID \
    --instance-type $INSTANCE_TYPE \
    --key-name $KEY_NAME \
    --security-group-ids $SECURITY_GROUP_ID \
    --user-data file://user-data.sh \
    --tag-specifications "ResourceType=instance,Tags=[{Key=Name,Value=$PROJECT_NAME}]" \
    --query 'Instances[0].InstanceId' \
    --output text)

echo "✅ EC2 instance $INSTANCE_ID launched successfully"

# Wait for instance to be running
echo "⏳ Waiting for instance to be running..."
aws ec2 wait instance-running --instance-ids $INSTANCE_ID

# Get instance public IP
INSTANCE_IP=$(aws ec2 describe-instances \
    --instance-ids $INSTANCE_ID \
    --query 'Reservations[0].Instances[0].PublicIpAddress' \
    --output text)

echo "🌐 Instance public IP: $INSTANCE_IP"

# 3. Setup Route53
echo "🔄 Setting up Route53..."
export INSTANCE_IP
source ./route53-setup.sh

# 4. Import domain settings
echo "🌍 Importing domain settings..."
export DOMAIN_NAME
source ./import-domain.sh

# 5. Build the application
echo "🏗️ Building application..."
npm install
npm run build

# 6. Deploy to EC2
echo "📤 Deploying to EC2..."
# Wait for SSH to be available
echo "⏳ Waiting for SSH to be available..."
while ! nc -z $INSTANCE_IP 22; do   
    echo "Waiting for SSH..."
    sleep 5
done

# Copy files to EC2
echo "📂 Copying files to EC2..."
scp -i "$KEY_NAME.pem" -r ./dist/* ec2-user@$INSTANCE_IP:/var/www/html/
scp -i "$KEY_NAME.pem" ./nginx.conf ec2-user@$INSTANCE_IP:/etc/nginx/conf.d/default.conf

# Restart Nginx
ssh -i "$KEY_NAME.pem" ec2-user@$INSTANCE_IP "sudo systemctl restart nginx"

echo "🎉 Deployment completed successfully!"
echo "🌐 Your website should be available at: http://$DOMAIN_NAME"
echo "⚠️ Note: DNS propagation might take up to 48 hours"
echo "🔍 Instance ID: $INSTANCE_ID"
echo "🔍 Instance IP: $INSTANCE_IP"
