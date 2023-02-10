/*Problem 3: Use the same function to print Non-Primes from 2 to a given limit
*/
function printnonprime(limit){
  for(let i=1;i<=limit;i++){
    let count=0;
    for(let j=1;j<=i;j++){
      if(i%j==0){
        count++;
      }
    }
    if(count==2){
      // console.log(i+" ");
    }
    else{
      console.log(i+" ");
    }
  }
}
printnonprime(10);