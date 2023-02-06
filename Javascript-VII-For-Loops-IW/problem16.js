/*Mod of 10 II
Description

You are given a number stored in a variable with the namenum

Find out the value obtained from the expressioni % 10, whereiconsists of all the values from 1 to the value stored innum, includingnum


Input
The first and the only line of the input contains the value stored innum


Output
Print the value obtained after doing the operation,i % 10, whereirefers to all the values from 1 to the number stored innum, including that as well

Note : Print all the values on a new line
*/
let num=7;

let x=0;
for(let i=1;i<=num;i++){
  x=i%10;
  console.log(x);
}