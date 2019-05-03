'use strict';

const ApiBuilder = require('claudia-api-builder'); // require the Claudia API Builder module
const api = new ApiBuilder(); // create a instance of Claudia API Builder

// const getPizzas = require('./handlers/get-pizzas');
const {
    getOrder,
    createOrder,
    updateOrder,
    deleteOrder } = require('./handlers/crud-orders');

module.exports = api;

api.get('/', () => 'Welcome to Pizza API');

api.get('/pizzas', () => {
    return getOrder();
});

api.get('/pizzas/{id}', (request) => {
    return getOrder(request.pathParams.id);
}, { error: 404 });

api.post('/pizzas/save/order', (request) => {
    return createOrder(request.body);
}, { success: 201, error: 400 });

api.put('/pizzas/update/{id}', (request) => {
    return updateOrder(request.pathParams.id, request.body);
}, { error: 400 });

api.delete('/pizzas/remove/{id}', (request) => {
    return deleteOrder(request.pathParams.id);
}, { error: 400 });
