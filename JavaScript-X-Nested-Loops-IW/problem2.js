/* Problem 2: Print Prime Numbers from 1 to given limit */
var limit = 20;
console.log(2);
for(var i=3;i<=limit;i++){
  let count=0;
  for(var j=2;j<i;j++){
    if (i%j==0){
      count++;
    }
  }
  if(count==0){
    console.log(i);
  }
}