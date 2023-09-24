// // operator and their types 


// 1. Arithmetic Operators 




const a = 10;
const b = 20;
const c = 30;


console.log('addition ', a + b + c)//this line do the addition
console.log('substraction ', c - a)//this liine do the subtraction
console.log('multiplication ', a * b)//this line do the multiply
console.log('devide ', c / a)//this line do the devision
console.log('modulus ', c % a)// this line do the devide and given the reminder

let add = 0;
let sub = 0;
console.log('pri incriment', ++add);//this line add befoe value in variable
console.log('post incriment', add++)//this line add ofter value in variable
console.log('pri deciment', --sub);//this line sub befor value in variable
console.log('post decriment', sub--);//this line sub ofter value in variable


//2.Assignment Operators

//    - Assignment =
var ass1 = 10;
var ass2 = 15;
console.log('ass1 before :', ass1)

ass1 = ass2;
console.log('ass1 after :', ass1)


//    - Addition Assignment +=

var add1 = 10;
var add2 = 11;
const add4 = add1 + add2
console.log('add4 :', add4)
const add3 = add1 += add2;
console.log('add3 :', add3)

console.log('string concatination :', add1 + '10')



//    - Subtraction Assignment -=
var subAss1 = 15;
var subAss2 = 20;

console.log('without sub-assignment', subAss2 - subAss1);
console.log('using sub-assignment', subAss1 -= subAss2);


//    - Multiplication Assignment *=

var mulAss1 = 11;
var mulAss2 = 20;

console.log('without mul-assignmet', mulAss1 * mulAss2)
console.log('with mul-assignmet', mulAss1 *= mulAss2)

//    - Division Assignment /=

var divAss1 = 3;
var divAss2 = 1000000;

console.log('wihtout div-assignemt ', divAss1 / divAss2)
console.log('with div-assignemt ', divAss1 /= divAss2)



//    - Modulus Assignment %=

var divAss1 = 1001;
var divAss2 = 2;

console.log('wihtout div-assignemt ', divAss1 % divAss2)
console.log('with div-assignemt ', divAss1 %= divAss2)




// 3. **Comparison Operators**: 

var com1 = 10;
var com2 = 10;
//    - Equal to ==

var com3 = com1 == com2;
console.log('com3 :', com3)


//    - Not equal to !=
var com4 = com1 != com2;
console.log('com4 :', com4)

//    - Strict equal to ===
var com5 = com1 === com2
console.log('com5 :', com5)

//    - Strict not equal to !==
var com6 = com1 !== com2;
console.log('!== :', com6)

//    - Greater than >
console.log('greater than :', com1 > com2)
console.log('greater than :', com2 > com1)


//    - Less than <
console.log('less than :', com2 < com1)
console.log('less than :', com1 < com2)


//    - Greater than or equal to >=
console.log('greater than or equal to :', com1 >= com2)
console.log('greater than or equal to :', com2 >= com1)


//    - Less than or equal to <=
console.log('less than or equal to :', com1 <= com2)
console.log('less than or equal to :', com2 <= com1)


// 4. **Logical Operators**

//    - Logical AND &&
var log1 = 10;
var log2 = 21;
var log3 = log1 == log2;
var log4 = log1 != log2
console.log('and operator :', log3 && log4)



//    - Logical OR ||

console.log('or operator :', log3 || log4)


//    - Logical NOT !
console.log('not operator', !(log2 > 0 || log1 < 0));



// 5. **Conditional (Ternary) Operator**:

//    - Conditional ? :

console.log('ternary operator :', 10 < 12 ? true : false) // output true
console.log('ternary operator :', 10 > 12 ? 1 : 2)  // output 2 false


// 6. **Bitwise Operators**:  


//    - Bitwise AND &
var bitA = "ram";
var bitB = "ram";
console.log('bitwise & operator', bitA & bitB) // output 1
const bitC = 22;
const bitD = 22;
console.log('bitwise & operator', bitA & bitB == bitC & bitD) // output 1




//    - Bitwise OR |
console.log('bitwise | operator', bitA | bitB)
console.log('bitwise | operator', bitA & bitB | bitC & bitD)




//    - Bitwise XOR ^
//    - Bitwise NOT ~
//    - Left Shift <<
//    - Right Shift >>
//    - Zero-fill Right Shift >>> 






// 7. **Unary Operators**: 


//    - Unary plus +
const unaryA = 1;
const unaryB = '22';
console.log('unary + operator ', unaryA + unaryB) // output 122
console.log('unary + operator ', unaryA + + unaryB) // output 23


//    - Unary minus -
console.log('unary - operator ', unaryA + -unaryB) // output 122
console.log('unary - operator ', unaryA + - unaryB) // output 23



//    - typeof (returns the data type of an operand)

var name = "ashish";
var number = 10;
console.log('name :', typeof name)
console.log('number :', typeof number)



//    - void (discards a return value)
var unaryVoid = 10;
var unaryVoid2 = "10";
console.log('unaryVoid :', void unaryVoid)
console.log('unaryVoid :', void unaryVoid2)

//    - delete (deletes an object's property)
let arr = new Array(1, 2, 3, 4)
delete arr[0]
console.log('arr :', typeof arr);
console.log(arr)
var obj = {
    name: 'ashish',
    address: 'bhagirathpur',
    pincode: 275202
}
delete obj.address
console.log(obj)
console.log('obj :', typeof obj)




// 8. **Other Operators**:

//    - Comma , (used to separate expressions)
const comma1=10;
const comma2=11;
console.log('comma , operator :',comma1 , comma2)


//    - instanceof (checks if an object is an instance of a specific class)
var inst=['ram','shyam']
var instObje={
    name:'ram',
    gedner:'male'
}
var check=inst instanceof Array;
console.log('instanceof :',check)
console.log(instObje instanceof Object)




//    - in (checks if an object has a certain property)
console.log('in operator :',"name" in instObje)
console.log('in operator :',"age" in instObje)