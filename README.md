

# Claudia commands

claudia create --region us-east-1 --api-module /your_path/your_file whithout extension
- Or
claudia update

# Links

https://github.com/claudiajs/claudia


# DynamoDb

aws dynamodb create-table --table-name pizza-orders-db --attribute-definitions \
 AttributeName=orderId,AttributeType=S \ 
 --key-schema AttributeName=orderId,KeyType=HASH \
 --provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1 \
 --region us-east-1 \
--query TableDescription.TableArn --output text