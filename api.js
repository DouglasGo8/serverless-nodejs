'use strict'

const ApiBuilder  = require('claudia-api-builder') // require the Claudia API Builder module
const api = new ApiBuilder (); // create a instance of Claudia API Builder

module.exports = api

api.get('/pizzas', () => { // defines a route and a handler
    return [
        'Cappricciosa',
        'Quattro Formaggi',
        'Napoletana',
        'Margerita',
        'Pepperone'
    ]
});
