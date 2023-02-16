var crustType = ["thin", "hand-tossed", "deep dish", "thick", "stuffed"]
var sauceType = ["pesto","garlic ranch","tomato","buffalo"]
var meat = ["pepperoni","sausage","none"]
var cheese = ["mozzarella","pepper jack","feta"]
var toppings = ["anchovies","black olives","green olives","mushrooms","pineapple","peppers"]

function getRandomItem(typeArr) {
    var randomIndex = Math.floor(Math.random() * typeArr.length);
    var item = typeArr[randomIndex];

    return item;
}

function randomPizza()    {
    var pizza = {};
    pizza.crustType = getRandomItem(crustType);
    pizza.sauceType = getRandomItem(sauceType);
    pizza.meat = getRandomItem(meat);
    pizza.cheese = getRandomItem(cheese);
    pizza.toppings = getRandomItem(toppings);
    return pizza;
}

console.log(randomPizza())
