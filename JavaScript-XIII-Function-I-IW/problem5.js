/*Problem 5: Write a function to replace spaces in a given string with - .
*/

function replacespace (str){
  let space=" ";
  let bag="";
  
  for(let i=0;i<str.length;i++){
    if(str[i]==space){
      bag=bag+"-";
    }
    else{
      bag=bag+str[i];
    }
  }
  console.log(bag);
}

replacespace("Masai School A Transformaton In Education");