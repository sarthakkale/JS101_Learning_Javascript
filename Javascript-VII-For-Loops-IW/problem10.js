/*Multiplication Table of N
Description

Given a number, stored in the variable with the namenum

Print the multiplication table of the value stored innum

For example, if the value stored innumis 2, then the output should be

2
4
6
8
10
12
14
16
18
20
Print each number, on a new line
*/
let num=3;
for(let i=1;i<=num*10;i++){
  if(i%num==0){
      console.log(i);
  }
}