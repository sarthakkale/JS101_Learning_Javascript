/*Problem 1: Create a function to check if a number is Prime or Not
*/

function checkprime(num){
  let count=0;
  for(let i=1;i<=num;i++){
    if(num%i==0){
      count++;
    }
  }
  if(count==2){
    console.log("it's a prime number")
  }
  else{
    console.log("it's not a prime number")
  }
}

checkprime(1);