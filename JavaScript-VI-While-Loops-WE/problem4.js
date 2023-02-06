/*
Problem 4: Print the average of even numbers from 1 to 100 (both included)
*/
let start = 1;
let end = 100;
let sum = 0;
let avg = 0;
let count = 0;
while(start<=end){
  if(start%2==0){
    count++;
    sum=sum+start;
  }
  start++;
}
avg=sum/count;
console.log(avg);