var shoppingCart = {
    books : 3,
    pen :25,
    mouse : 1,
    keyboard : 2,
}
var penCount = shoppingCart.pen;
var penCount2 = shoppingCart['pen'];

var propertyName = 'pen';
var propertyValue = shoppingCart[propertyName];
// console.log(propertyName,propertyValue);
var properties = Object.keys(shoppingCart);
var valuess = Object.values(shoppingCart);
// console.log(properties);
// console.log(valuess);


// set property values 

shoppingCart.pen = 15;
console.log(shoppingCart);
shoppingCart['pen'] = 20;
console.log(shoppingCart);
shoppingCart[propertyName]=25;
console.log(shoppingCart);