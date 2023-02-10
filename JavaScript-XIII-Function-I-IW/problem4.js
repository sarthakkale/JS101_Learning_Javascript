/*Problem 4: Write a function to check if the char is a small case or not.
*/
function identifycase (a){
  let SCAlph="abcdefghijklmnopqrstuvwxyz";

  for(let i=0;i<SCAlph.length;i++){
    if(a==SCAlph[i]){
      console.log("Small Case Character");
      break;
    }
    else{
      console.log("Not a Small Case Character")
      break;
    }
  }
}

identifycase("a");