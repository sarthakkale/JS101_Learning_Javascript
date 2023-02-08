/* Problem 1: Print the Calendar date in the below format */

for(var i=1;i<=12;i++){
  for(var j=1;j<=31;j++){
    if(i==4 || i==6 || i==9 || i==11){
      if(j==31){
        continue;
      }
      else{
        console.log(j+" - "+i);
      }
    }
    else if(i==2){
      if(j==29){
        break;
      }
      else{
        console.log(j+" - "+i);
      }
    }
    else{
      console.log(j+" - "+i);
    }
  }
  console.log();
}