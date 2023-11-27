let type = 3;
console.log(typeof type);

let b = true;
console.log(typeof b)


//automatic conversion
let c = 3 + null;
console.log(c);
console.log(typeof c);

let d = "5" * "yes"
console.log(d)
console.log('typeof :', typeof type);


// conversion


// 1. String()
// 2. Number()
// 3. Boolean()


let e = 4;
console.log('typeof e :', typeof e)

let newType = Number(e)
console.log('typeof newtype :', typeof newType)

// numeric string used with +gives string type 
let result="3"+2;
console.log(result);//"32"

result="3"+true;
console.log(result)//"3true"
result="3"+undefined;
console.log(result);//"3 undifined"
result='3'+null
console.log(result);
//number strig used with -,/,* result numbert type
let result1;
result1='4'-'2';
console.log(result1)//2
 result1="4"-2;
 console.log(result1);//2
 result1='4'*2;
 console.log(result1);//8
 result1='12'/3;
 console.log(result1);//4

 //non numeric string result to nan
 //non-numeroc string used with -,/,*,result to NaN
 let string;
 string='hello'-'word';
 console.log(string);
 string='4'-'hello';
 console.log(string);

 //ex-4 implicit Boolen conversion to number
 //if boolean is used true is 1 false is 0
 let bol;
 bol='5'-true;
 console.log(bol);
 bol='6'+ true;
 console.log(bol);
 bol='4'+ false;
 console.log(bol);
 bol='8'-false;
 console.log(bol);

 //ex-5 null converstion to number
 let nul;
 nul=3+null;
 console.log(nul);
 nul=5-null;
 console.log(nul);
 nul=5*null;
 console.log(nul);
 nul=12/null;
 console.log(nul);
 //ex 6- undifine used with nuber boolen or null
 //Arthimatic opreter pf undefine with number,boolean or null gives NaN
 let un;
 un=4+undefined;
 console.log(un);
 un=5-undefined;
 console.log(un);
 un =true + undefined;
 console.log(un);
 un=null+undefined;
 console.log(un);

// convert to number explicitly
//to convert number string and boolen value to numbers,you can use number()
//string to number
let s;
s=Number('453');
console.log('number type',s);
a=Number('342e-1');
console.log(a);

// boolen to number
let B;
B=Number(true);
console.log('given value boolen',B);
B=Number(false);
console.log('given value boolen',B);
//in javascript empty string and null values return 0 for ex

let n;
n=Number(null);
console.log(n);
n=Number('');
console.log(n);
//if a string is an invalid,the result will ne NaN
let S;
S=Number('hello');
console.log(S);
S=Number(NaN);
console.log(S);
S=Number(undefined);
console.log(S);
// note- you can also generet number from string using parseint,parsflot,unary opreter and math.floor ()
let p;
p=parseInt('20.01');
console.log(p);
p=parseFloat('20.01');
console.log(p);
p=Math.floor('20.01');
console.log(p);
//3.convert to boolean Explicitily
/* to convert other data types to a booles you can use boolean().
in javascript undifine other data type to a boolean,you can use false */
let r;
r=Boolean('');
console.log(r);
r=Boolean(0);
console.log(r);
r=Boolean(undefined);
console.log(r);
r=Boolean(null);
console.log(r);
r=Boolean(NaN);
console.log(r);
//All other value give true for example
r=Boolean(234);
console.log(r);
r=Boolean('hello');
console.log(r);







