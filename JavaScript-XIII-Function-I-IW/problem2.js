/*Problem 2: Use the above function to print the Primes from 2 to a given limit
*/
function printprime(limit){
  for(let i=1;i<=limit;i++){
    let count=0;
    for(let j=1;j<=i;j++){
      if(i%j==0){
        count++;
      }
    }
    if(count==2){
      console.log(i+" ");
    }
  }
}

printprime(10);