
const AWS = require('aws-sdk');
const uuid = require('uuid');
const docClient = new AWS.DynamoDB.DocumentClient();


getOrder = (orderId) => {
    if (typeof orderId === 'undefined') {
        return docClient.scan({
            TableName: 'pizza-orders-db'
        }).promise()
            .then(result => result.Items);
    }
    return docClient.get({
        TableName: 'pizza-orders-db',
        Key: {
            orderId: orderId
        }
    }).promise()
        .then(result => result.Item);
}


/**
 * 
 */
createOrder = (order) => {

    if (!order || !order.pizza || !order.address) {
        throw new Error('To order pizza please provider pizza type with an valid Address');
    }

    return docClient.put({
        TableName: 'pizza-orders-db',
        Item: {
            orderId: uuid(),
            pizza: order.pizza,
            address: order.address,
            orderStatus: 'pending'
        }
    }).promise();
};

/**
 * 
 */
updateOrder = (id, orderToUpdate) => {
    if (!id || !orderToUpdate) {
        throw new Error("Order ID and updates objects are required");
    }
    return docClient.update({
        TableName: 'pizza-orders-db',
        Key: {
            orderId: id
        },
        UpdateExpression: 'set pizza=:p, address=:a',
        ExpressionAttributeValues: {
            ':p': orderToUpdate.pizza,
            ':a': orderToUpdate.address
        },
        ReturnValues: 'ALL_NEW'
    }).promise()
        .then((result) => {
            return result.Attributes;
        })
        .catch((error) => {
            throw error;
        });
};

/**
 * 
 */
deleteOrder = (id) => {
    if (!id) {
        throw new Error("Order ID is required");
    }

    return docClient.delete({
        TableName: 'pizza-orders-db',
        Key: {
            orderId: id
        }
    }).promise()
        .then(result => result)
        .catch(error => {
            throw error;
        });
};

module.exports = {
    getOrder,
    createOrder,
    updateOrder,
    deleteOrder
};