
// i am use menualy three away creat a aray
//first away
var array=['ram','shyam','name','seeta'];
console.log(array);

//this is second away create a array use new keyword let's see
var array1=new Array('hindi','math','sceince','socil_sceince','geographic');
console.log(array1);

//this is therd away create a array use Array of keyword  to apply let's see
var array2=Array.of("Apple","boy",'cat')
console.log(array2); 

//thare are maniy type array
/*
Array length
Array toString()
Array pop()
Array push()
Array shift()
Array unshift()
Array join()
Array delete()
Array concat()
Array flat()
Array splice()
Array slice()
*/
//first methode -lenght method - this methode return the length 
var aray3=['Ashish','vishal',"kanhya"];
var l=aray3 .length;
console.log(l);
//

//seconde menthode 
//-tostring methode -this methode convert data string with saprate commo opreter

let array4=[`ashish`,`anand`,`rohit`,`pradeep`];
let string=array4.toString();
console.log(string);

//third methode
//pop methode-this methode out data in array end side and give the new length
let array5=[`rollno`,`name`,`father_name`,`class`];
let p=array5.pop()
console.log(p);//it will be obtended new length
console.log(array5);//show the new arry
// forth methode
//push methode- this methode push the data in array last postion and give the new lenght

let aray6=[`apple`,`banana`,`pineapple`,`mango`];
let P=aray6.push("Grapes");
console.log(P);//it will be new length obtended
console.log(aray6)//show the new array

//fifth methode
//shift methode- this methode remove first element in array
var a=['ashish','anmole','radhika','nitu'];
var b=a.shift();
console.log(b);
console.log(a);
//unshift methode-this methode add new element in arry first position
var aa=[`sunday`,`monday`,`tuesday`,`wednesday`];
var unshift=aa.unshift(`Tuesday`);
console.log(unshift);//it will be obtended new length
console.log(aa);//show the new array
//join methode- this methed add the arry element spret opreter
let ar=[`ashish`,`anish`,`pradeep`,`ramyash`];
let j=ar.join("*")
console.log(j);
// output  ashish*anish*pradeep*ramyas
//delete methodede- this methode aaray elements can be using the javaScript opreter delete
    let arr=[`ashish`,`anish`,`pradeep`,`ramyash`];
    let D=delete ar[3];
     console.log(D);
     console.log(arr);

// array cancat methode - this methode marge the two array

var a10=['ashish','anmole'];
var c=['vikash','anmole' ,'aditay'];
var coun=a10.concat(c);//
console.log(coun);
// output :- (5) ['ashish', 'anmole', 'vikash', 'anmole', 'aditay']

//arry flate() methode-this methode concat the sub array
let c5=[[13,34],[4,6,3],[1,2,3]];
let f=c5.flat();
console.log(f);
//output(8) [13, 34, 4, 6, 3, 1, 2, 3]

//splice methode :- this methode add new items to an array
//it take to paramiter first pramiter difine the add itam this position
//secod pramiter difine the how meny lelments should be removed

var myarr=['ravi','anand','vishal'];
var spl=myarr.splice(2,3,'ashish','pradeep');
console.log(spl);
console.log(myarr);
//slice methode - this methode can take two argumenta slice
//the methode than selects element form the satr argument ,and up to (but not including)the end argument
var myarr=['ravi','anand','vishal'];
var spli=myarr.slice(1,2);
console.log(spli);








































































