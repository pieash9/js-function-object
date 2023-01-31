var shoppingCart = {
    books : 3,
    pen :25,
    mouse : 1,
    keyboard : 2,
    shoes : 5,
    bottle : 5,
}
const keys = Object.keys(shoppingCart);
// console.log(keys);
const values = Object.values(shoppingCart);
// console.log(values);
for(var i=0;i<keys.length;i++){
    var propertyName = keys[i];
    var propertyValues = shoppingCart[propertyName];
    // console.log(propertyName , propertyValues);
}
for(propertyName in shoppingCart){
    const value = shoppingCart[propertyName];
    console.log(propertyName, value);
}