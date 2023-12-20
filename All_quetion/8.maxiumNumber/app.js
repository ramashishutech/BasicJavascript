//Q 8=find the maximum number in array of number 

var a = [54, 10, 23, 30, 52];
var max = 0; //array
var len = a.length
for (let i = 0; i < len; i++) {

    if (a[i] > max) { // number to array 
       // console.log(a[i]);
        max = (a[i]); // number 
        console.log("it is max vlaue "+max)

    }
} console.log(`maximum number`, max);
//ou put =90;