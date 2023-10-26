
console.log(new Date);


// new keyword 
const d=new Date();
console.log(d);

const d1=new Date("07/10/023");
console.log(d1);

//note= date object are satatic. the 'clock 'is not 'runing'
//The computer clock it tickking date objet are not.

//creating Date object 
//Date object are creating with the new Date()constructor.
//There are 9 ways to created with the new date object;

//javascript new Date()
//new date() create a date object with the curet date and time

const date=new date();
console.log(date);
//new date (date string)
//new date(date string) create a date object form a date string
const d2=new date("October 13, 2023 11:12:00")
console.log(d2);
const d3=new date('2024-03-24');
console.log(d3);
//new date (year ,month .....)
//create a data object with a specifid date and time
// 7 number spacify year.month,day,hour,minuts,seconde, and millseconded(in that order);
const d4=new date(2023,11,24,10,33,30,0);
console.log(d4);
//note - javaScript count monthform 0to11; january=0; december=11.
//Specifying a month higher than 11 will not result in an error but add the overflow to the next year:

const d5=new date(2023,13,24,10,22,30);
console.log(d5);

//using 6,4,3,or 2 number
//6 number specify year, month ,day hour and mintes , second;
const d6=new date(2023,11,23,10,12,20);
console.log(d6);
//5 number specify year, month ,day hour and mintes , ;
const d7=new date(2023,11,23,10,12);
console.log(d7);
//4 number specify year, month ,day hour ;
const d8=new date(2023,11,23,10);
console.log(d8);
//3 number specify year, month ,day ;
const d9=new date(2023,11,23);
console.log(d9);
//2 number specify year, month ,;
const d10=new date(2023,11);
console.log(d10);
//1 number specify year, ;
const d11=new date(2023);
console.log(d11);
//yoy cannot omit month.if you supply only one prameter it will be treated as milliseconde.

//previous centuri - one and two digit year will be interpretd as 19xx;
const c=new date(99,11,24);
console.log(c);

const c1= new date(9,11,24);
//javaScript storres dates as milliseconds
//javaScript stores dates as number of millisecond scince junuary 01,1970
//zero time is january 01, 1970 00:00:00 utc.
//one day 24 hours(24 hourse)is 86 400 000 milliseconds.
//now the time is 1696697009163 milliseconde past january 02,1970
//new date (millisecondes)
//new date (millisecond) create a new date object as milliseconds plus zero time
//ex- 01 january 1970 plus 100 000 000 000
const m=new date(100000000000);
console.log(m);
//january o1 1970 minus 100 000 000 000 milliseconds is
const m1=new date(-100000000000);
console.log(m1);
//january 01 1970 plus 24 hours is

const m2=new date(24*60*60*1000);//or
const m3=new date(86400000);
console.log(m2);
console.log(m3);


//01 jANUARY1970 plus o millisecondes is 
const m4=new date(0);
console.log(m4);










