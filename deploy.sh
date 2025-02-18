#!/bin/bash

# Variables
VPC_ID="your-vpc-id"
SUBNET_ID="your-subnet-id"
KEY_NAME="your-key-pair"
PROJECT_PATH="$(pwd)"
DOMAIN="digi-trans.org"
REGION="us-east-1"

# Create security group
echo "Creating security group..."
SG_ID=$(aws ec2 create-security-group \
    --group-name digitrans-web \
    --description "Security group for Digitrans web server" \
    --vpc-id $VPC_ID \
    --output text --query 'GroupId')

# Configure security group
aws ec2 authorize-security-group-ingress \
    --group-id $SG_ID \
    --protocol tcp \
    --port 80 \
    --cidr 0.0.0.0/0

aws ec2 authorize-security-group-ingress \
    --group-id $SG_ID \
    --protocol tcp \
    --port 443 \
    --cidr 0.0.0.0/0

aws ec2 authorize-security-group-ingress \
    --group-id $SG_ID \
    --protocol tcp \
    --port 22 \
    --cidr 0.0.0.0/0

# Create EC2 instance
echo "Launching EC2 instance..."
INSTANCE_ID=$(aws ec2 run-instances \
    --image-id ami-0c7217cdde317cfec \
    --instance-type t3.small \
    --key-name $KEY_NAME \
    --security-group-ids $SG_ID \
    --subnet-id $SUBNET_ID \
    --user-data file://user-data.sh \
    --tag-specifications "ResourceType=instance,Tags=[{Key=Name,Value=digitrans-web}]" \
    --output text \
    --query 'Instances[0].InstanceId')

# Wait for instance to be running
echo "Waiting for instance to be ready..."
aws ec2 wait instance-running --instance-ids $INSTANCE_ID

# Get instance public IP
PUBLIC_IP=$(aws ec2 describe-instances \
    --instance-ids $INSTANCE_ID \
    --output text \
    --query 'Reservations[0].Instances[0].PublicIpAddress')

echo "Instance is running at $PUBLIC_IP"

# Wait for instance to be ready
sleep 60

# Copy project files to instance
echo "Copying project files to instance..."
scp -i "$KEY_NAME.pem" -r $PROJECT_PATH/* ec2-user@$PUBLIC_IP:/home/ec2-user/app/

# SSH into instance and build/start the application
ssh -i "$KEY_NAME.pem" ec2-user@$PUBLIC_IP 'cd /home/ec2-user/app && docker-compose up -d --build'

echo "Deployment completed!"
echo "Instance ID: $INSTANCE_ID"
echo "Public IP: $PUBLIC_IP"
