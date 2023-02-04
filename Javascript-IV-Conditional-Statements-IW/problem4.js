// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let username = "sarthakkale_";
let password = "p.@ss";

let userInput = "sarthakkale_";
let passwordInput = "P.@ss";

if(username == userInput) {
  if(password == passwordInput){
    console.log("Successfull Login");
  }
  else{
  console.log("not able to Login"+"\n"+"(Password is Incorrect)");
  }
}
else{
  console.log("not able to Login"+"\n"+"(Username is Incorrect)");
}