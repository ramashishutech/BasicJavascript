// data types 


// 1. string 

var str1 = "1";
var str2 = 1;
var str3 = "ram";

console.log('str1 :', typeof str1)


// 2. Number 
var num1 = 1;
var num2 = 22;
var num3 = "22";

console.log('num1 :', typeof num1)



// 3. BigInt 
var num = 123456789912345678912;
var numB = 123456789012345678901234567890123456789012345678901234567890123456;
console.log('num :', num)
var numC = BigInt(numB)
console.log("bigInt :", numC);


// 4. Boolean

var btype1 = true;
var btype2 = false;
console.log('btype1 :', typeof btype1)
console.log('btype2 :', typeof btype2)



// 5. Undefined 
var a;
console.log('a :', typeof a)


// 6. Null 
var b = null
console.log('b :', typeof b)


// 7. Symbol 
var sbl = Symbol('ashish')
var sbl1 = Symbol('ashish')
console.log('symbol :', sbl === sbl1) // output false