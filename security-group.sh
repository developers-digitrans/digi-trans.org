#!/bin/bash

# Create security group
SG_ID=$(aws ec2 create-security-group \
  --group-name digitrans-web \
  --description "Security group for Digitrans web server" \
  --output text --query 'GroupId')

# Allow HTTP
aws ec2 authorize-security-group-ingress \
  --group-id $SG_ID \
  --protocol tcp \
  --port 80 \
  --cidr 0.0.0.0/0

# Allow HTTPS
aws ec2 authorize-security-group-ingress \
  --group-id $SG_ID \
  --protocol tcp \
  --port 443 \
  --cidr 0.0.0.0/0

# Allow SSH (restrict to your IP in production)
aws ec2 authorize-security-group-ingress \
  --group-id $SG_ID \
  --protocol tcp \
  --port 22 \
  --cidr 0.0.0.0/0

echo "Security group created with ID: $SG_ID"