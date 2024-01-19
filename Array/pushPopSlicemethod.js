let arr=['a','b','c'];

//copy of arr using spread operator
let arr2 = [...arr];

//push method
arr2.push("ranjan");
console.log(`Original Array: ${arr}`);
console.log(`Spread operator: ${arr2}`);

//push method can accept 'n' number of parameter
arr2.push("Piyush", "Rishav", "Panda", "Munna");
console.log(`Original Array: ${arr2}`);
console.log(`Original Array no affected: ${arr}`);

var arr3 = [34, 234, 567, 4];
console.log(arr3.push('jacob',true,23.45));
console.log(arr3);

//Slice method-> slice(begin,end)-> end is excluded.
arr4= arr3.slice(2,4);
console.log(`slice method ${arr4}`);