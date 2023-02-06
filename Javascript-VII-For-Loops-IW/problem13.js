/*Sum of 1 to N
Description

You are given a number, stored in a variable with the name N

Find the sum of al the numbers 1 to N

For example, if the value stored inN = 5, then the sum of 1 to 5 is

1
2
3
4
5
Therefore, the sum becomes,sum = 1 + 2 + 3 + 4 + 5 = 15, which is the required output
*/
let N=5;
let sum=0;
for(let i=1;i<=N;i++){
    sum=sum+i;
}  
console.log(sum);