/*Move 2 Ahead II
Description

You are given a number stored in a variable with the following name,num

You have to print all the even numbers greater than zero, and less than or equal to the value stored innum

For example, if the value stored innum = 13, then the output will be

2
4
6
8
10
12
Note : All the values need to be printed on a new line
*/
let num=12;
for(let i=1;i<=num;i++){
  if(i%2==0){
      console.log(i);
  }
}