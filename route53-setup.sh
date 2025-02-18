#!/bin/bash

# Replace these variables with your values
DOMAIN="digi-trans.org"
HOSTED_ZONE_ID="your-hosted-zone-id"
ELASTIC_IP="your-elastic-ip"

# Create Route53 record set
aws route53 change-resource-record-sets \
  --hosted-zone-id $HOSTED_ZONE_ID \
  --change-batch '{
    "Changes": [{
      "Action": "UPSERT",
      "ResourceRecordSet": {
        "Name": "'$DOMAIN'",
        "Type": "A",
        "TTL": 300,
        "ResourceRecords": [{
          "Value": "'$ELASTIC_IP'"
        }]
      }
    },
    {
      "Action": "UPSERT",
      "ResourceRecordSet": {
        "Name": "www.'$DOMAIN'",
        "Type": "CNAME",
        "TTL": 300,
        "ResourceRecords": [{
          "Value": "'$DOMAIN'"
        }]
      }
    }]
  }'