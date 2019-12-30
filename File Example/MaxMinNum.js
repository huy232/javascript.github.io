
var  numbers = [53, 4558 , 4120 , -2165 , 2528 , 4500 , 3454, -4354354]; 
 

var maxInNumbers = Math.max.apply(Math, numbers); 
var minInNumbers = Math.min.apply(Math, numbers);
 

console.log("Giá trị lớn nhất là " +maxInNumbers+ "");
console.log("Giá trị nhỏ nhất là " +minInNumbers+ "");
