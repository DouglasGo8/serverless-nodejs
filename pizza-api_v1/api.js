'use strict';

const ApiBuilder = require('claudia-api-builder'); // require the Claudia API Builder module
const api = new ApiBuilder(); // create a instance of Claudia API Builder


const getPizzas = require('./handlers/get-pizzas');


module.exports = api


api.get('/', () => 'Welcome to Pizza API');

api.get('/pizzas', () => {
    return getPizzas();
});

api.get('/pizzas/{id}', (request) => {
    return getPizzas(request.pathParams.id);
}, { error: 404 });


