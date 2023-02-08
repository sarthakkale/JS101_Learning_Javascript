/*Problem 1 :
Given an array find the unique items in the array
*/
let array= ["Naruto", "Sakura", "Sasuke", "Naruto", "Nezi", "Hinata", "Shikamaroo", "Lee", "Kakshi", "Lee"];
let N = array.length;
let object ={};


for(let i=0;i<N;i++){
  object[array[i]] = "unique";
}
console.log(object);