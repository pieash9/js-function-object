// function sum(a,b,c,d,e){
//     console.log(a,b,c,d,e);
//     var sum = a+b+c+d+e;
//     console.log(sum);
// }
// sum(1,2,34,5,4);

// function sum(num1,num2){
//     console.log(num1,num2);
//     var sum = num1+num2;
//     return sum;
// }
// var total = sum(80,100);
// console.log('total',total);

function bringSingara(money){
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
    
}
var mayTaka = 430;
var Singaras = bringSingara(mayTaka);
console.log('Eating singaras:',Singaras);