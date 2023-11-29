const str = 'this is my schol';

//split the above string into an array of strings 
//whenever a blank space is encountered

const arr = str.split(" ");
//console.log("this is split value "+arr);
let l=arr.length
//console.log(l);

//loop through each element of the array and capitalize the first letter.


for (var i = 0; i < l; i++) {
   arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
   // console.log(arr[i]);
   // console.log(arr[i].charAt(0).toUpperCase());
   // console.log(arr[i].slice(1));

}

//Join all the elements of the array back into a string 
//using a blankspace as a separator 
const str2 = arr.join(" ");
console.log(str2);