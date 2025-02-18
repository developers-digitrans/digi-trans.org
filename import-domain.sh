#!/bin/bash

# Variables
DOMAIN="digi-trans.org"

# Create Route53 hosted zone
HOSTED_ZONE_ID=$(aws route53 create-hosted-zone \
    --name $DOMAIN \
    --caller-reference $(date +%s) \
    --output text \
    --query 'HostedZone.Id')

# Get nameservers
NAMESERVERS=$(aws route53 get-hosted-zone \
    --id $HOSTED_ZONE_ID \
    --output text \
    --query 'DelegationSet.NameServers')

echo "Domain setup completed!"
echo "Hosted Zone ID: $HOSTED_ZONE_ID"
echo "Please update your GoDaddy nameservers to:"
echo "$NAMESERVERS"
