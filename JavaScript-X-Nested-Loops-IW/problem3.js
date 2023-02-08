// Problem 3: Print a box patterns using *
let N =10;
for(var i=1;i<=N;i++){
  var str = "";
  for(var j=1;j<=N;j++){
    
    if(i==1 || i==N || j==1 || j==N){
      str = str+"*";
    }
    // else if(j==1 || j==N){
    //   str = str+"*";
    // }
    else{
      str = str+" ";
    }
  }
  console.log(str);   
  console.log();
}