// function foo(){
//     console.log('foo');
//     function bar(){
//         console.log('Barr');
//     }
//     bar();
// }
// foo();
// function make_avg(num1,num2,num3){
//     var sum = num1+num2+num3;
//     var avg = sum/3;
//     return avg;
// }
// var average =make_avg(5,10,15);
// console.log(average);

// var array = [100,200,300];
// var sum = 0;
// for (var i = 0; i < array.length; i++) {
//   sum += array[i];

// }
// var average = sum / array.length;
// console.log(average);

// function odd_even(number){
//     if(number%2 ==0){
//         console.log("even");
//     }else{
//         console.log('odd');
//     }
// }
// odd_even(100);

// function odd_even(number){
//     if(number%2 ==0){
//         return 'even';
//     }else{
//         return 'odd';
//     }
// }
// var result = odd_even(1001);
// console.log(result);

// var color = 'yellow';

// switch(color){
//     case 'red':
//         console.log("Stop");
//         break;
//     case 'yellow':
//         console.log("wait");
//         break;
//     case 'green':
//         console.log('Go and cross the road');
//         break;
// }

// function multiplicationTable13(number){
//     for(var i = 1;i <=10 ;i++){
//         var number;
//         var sum = number *i;
//         console.log(i,'*',number,'=',sum);
//     }
// }
// multiplicationTable13(12);

// function lowercase (word){
//     var lowercaseWord = word.toLowerCase();
//     return lowercaseWord;
// }
// var lower = lowercase('PIEASH AHMedD');
// console.log(lower);

// function fullName(fName,Lname){
//     var completeName = fName + Lname;
//     return completeName;
// }
// var returnName = fullName("pieash"," Ahmed");
// console.log(returnName);

// function square(number){
//     var squareValue= number*number;
//     return squareValue;
// }
// var finalResult = square(225);
// console.log(finalResult);

// const pizza = {
//   toppings: ["cheese", "sauce", "pepperoni"],

//   crust: "deep dish",

//   serves: 2,
// };
// var pizzaPrint = Object.values(pizza.toppings)
// var pepperoniPrint = pizzaPrint[2];
// console.log(pizzaPrint);
// console.log(pepperoniPrint);

function avg_number(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  var avg = sum / array.length;
  return avg;
}
var array = [50, 60, 70, 80];
var final__average = avg_number(array);
console.log(final__average);
