//function  to create the trangle area
 
function tranglarea(){

    var side1= 12;

var side2=13;  

var side3=15;
var s = (side1 + side2 + side3)/2;//this is semiparmiter formula
console.log(s)
var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));//this is trangle of area formula
console.log(area)
}tranglarea();