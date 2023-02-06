/*Move 2 Ahead
Description

You are given a number, stored in a variable with the namenum

Print all the odd numbers lesser than or equal to the value stored innum

Only those numbers need to be printed which are greater than zero

For example, given that the value stored innum = 12

Therefore, the output will be

1
3
5
7
9
11
*/
let num = 13;
for(let i=1;i<=num;i++){
  if(i%2!=0){
      console.log(i);
  }
}