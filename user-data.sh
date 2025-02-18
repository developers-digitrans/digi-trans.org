#!/bin/bash

# Update system
yum update -y

# Install Docker
yum install -y docker
systemctl start docker
systemctl enable docker
usermod -a -G docker ec2-user

# Install Docker Compose
curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

# Install Git
yum install -y git

# Create app directory
mkdir -p /home/ec2-user/app
chown -R ec2-user:ec2-user /home/ec2-user/app

# Install certbot
yum install -y certbot python3-certbot-nginx

# Install AWS CLI
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
./aws/install

# Create SSL certificate
certbot certonly --standalone -d digi-trans.org -d www.digi-trans.org --non-interactive --agree-tos --email your-email@example.com

# Set up auto-renewal for SSL certificates
echo "0 12 * * * /usr/bin/certbot renew --quiet" | crontab -
