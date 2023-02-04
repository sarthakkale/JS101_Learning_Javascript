/*
Problem 4: Given 3 numbers (all different values), print which is greatest
*/
let num1 = 3;
let num2 = 20;
let num3 = 10;

if(num1>num2 && num1>num3){
  console.log("Number "+ num1 +" is greatest");
}
else if(num2>num1 && num2>num3){
  console.log("Number "+ num2 +" is greatest");
}
else{
  console.log("Number "+ num3 +" is greatest");
}
