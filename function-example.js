// function functionName(parameters){
//     functionBody
//     return
// }
// var returnValue = functionName(parametersValue)

function AssignmentAverage(assignment1,assignment2,assignment3){
    var totalMarks = assignment1+assignment2+assignment3;
    var average = totalMarks / 3;
    return average;
}
var assignment1marks = 60;
var assignment2marks = 58;
var assignment3marks = 59;

var totalAverage = AssignmentAverage(assignment1marks,assignment2marks,assignment3marks);
console.log('Assignment average :',totalAverage);