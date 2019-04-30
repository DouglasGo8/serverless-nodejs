

const pizzas = require('../data/pizzas.json');


getPizzas = async (pizzaId) => {
    if (!pizzaId)
        return pizzas;
    const pizza = pizzas.find((p) => p.id == pizzaId);
    if (pizza)
        return pizza;

    throw new Error("The pizza you requested wasn't not found");
};


module.exports = getPizzas;
