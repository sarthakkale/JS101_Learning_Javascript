/*Problem 3 : Given an array of numbers find the average of all the even numbers.
*/
let numbers = [1,2,37,5,6,24];
let sum = 0;
let count = 0;
let avg = 0;
for(var i=0;i<numbers.length;i++){
  if(numbers[i]%2==0){
    sum = sum + numbers[i];
    count++;
  }
}
avg = sum/count;
console.log(avg);