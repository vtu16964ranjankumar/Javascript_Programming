// two ways for declaration of array in javascript
// Method 1:
let arr = ["ranjan", "rishav", "panda", "Nityanad", "piyush", "abhishek"]
console.log(arr);

let arr1 = new Array("Ram", "Shiva", "Lakshmi", "Ganesh");
//console.log(arr1);

// iteration of arrays
for(index=0; index<arr1.length;index++){
  console.log(arr1[index]);
}

// iteration through forEach()
i=0;
arr.forEach(myFunction);
function myFunction(item, i){
  console.log(item);
}