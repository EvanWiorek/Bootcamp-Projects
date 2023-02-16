function makeADaPizza(crustType, sauceType, meat, cheese, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.meat   =   meat;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = makeADaPizza("deep dish", "traditional", ["pepperoni", "sausage"], "mozzarella", "none")
var pizza2 = makeADaPizza("hand tossed", "marinara", "none", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
var pizza3 = makeADaPizza("thin", "tomato", "pepperoni", "mozzarella", ["mushrooms", "black olives", "green olives"])
var pizza5 = makeADaPizza("stuffed","tomato","pepperoni","mozzarella","mushrooms")
console.log(pizza5);
