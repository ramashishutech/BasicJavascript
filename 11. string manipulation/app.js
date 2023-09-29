// string manipulation

// ` ` template literal 

let fname = 'ashish'
console.log(fname + " " + "kumar" + "jalalabad");
console.log(`using template literal ${fname} kumar jalalabad`)
console.log(`This data is coming from js file using template literal`)



// for space down we use (n/)
let str1 = "This one is Ram/n book"
let str = 'ashish \'kumar'
console.log(str1)
console.log(str)

console.log("length is :", str1.length)
// to access str1 5th index data
console.log(str1[5])


// string concatenation
let string1 = "Hello"
let string2 = "World!"
console.log(string1 + string2)


let string3 = string1.concat(string2)
console.log('string concate using js method :', string3)

// case sensitive
if ("Hello" == string1) {
    console.log('Equal')
} else {
    console.log("Not equal!")
}


let extract = "This is t             javascript"
let substring = extract.substr(2, 7)
console.log(substring);
function mySubstr() {
    let container = ""
    for (let i = 0; i < extract.length; i++) {
        if (i == 2 || i == 3 || i == 4 || i == 5 || i == 6 || i == 7 || i == 8) {
            container += (extract[i])
        }
    }
    console.log("container", container)

}

// substing 
console.log(
    'substing :', extract.substring(10)
)

// indexOf
console.log(extract.indexOf('t'))

// lastIndexof
console.log(extract.lastIndexOf('t')
)
// trimstart function variable ke pahle shuru hone wala space hata deta hai 
let trimedText="   hellow     k                          "
console.log(trimedText.trimStart());

//uppercase 
// this methode change the charecter the capital lete
let lower = "abcdefghijklmnopqrstuvwxyz";
let copital= lower.toUpperCase();
console.log(lower);
// lowerCase
// this methode change the charecter the small leter
let upper= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let small= upper.toLowerCase();
console.log('it is lowercase',upper);
//string lenght this method give the text lenght

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let l = text.length;
console.log('it is lenght',l);
// stringh slice methode
//this methode do the slice between to prameter

var a=`Ashish ,Annad,Ravi,Rahul`;
var part=a.slice(7 ,13);
console.log(`it is slice`,part)
var a1=`Ashish ,Annad,Ravi,Rahul`;
var part1=a1.slice(7);
console.log(`it is slice onliy giveen one prameter`,part1);

var a2=`Ashish ,Annad,Ravi,Rahul`;
var part2=a2.slice(-12);
console.log(`it is slice geven the single negative pramiter`,part2);

var a3=`Ashish ,Annad,Ravi,Rahul`;
var part3=a3.slice(-6-12);
console.log(`it is slice methode given duble nagative pramiter`,part3);
//string substring this mathode as like the slice methode
let animal=`rat ,cat ,dog ,elephant`;
let sub=animal.substring(5 ,8);
console.log(`it is substring given to pramiter`,sub);

// string replce methode this methode do the replece value
var a=`my name is ashish kumar`;
var rep=a.replace("ashish","Ramyash");
console.log(`it is replace`,rep);
//cancat methode- this methode join the two value
var m=`ashish`
var n=`kumar`;
var d=m.concat(" " ,n);
console.log(`it is concat methode`,d);
//trim methode- this methode remove white sapce both side
let t="             ashish       "
let t1=t.trim();
console.log(`it is trim`,t1);
//trim start remove space starting text
let charecter="             ashish"
let t2=charecter.trimStart();
console.log(`it is trimstrat`,t2);
//trimend the remove the text end  ending time 
let letter="ashish         "
let letter1=t.trimEnd();
console.log("it is trimend",letter1);

//chart methode return the given posistion text value
var c='hello word';
var char= c.charAt(0);
console.log(`it charAt`,char);
//The charCodeAt() method returns the unicode of the character at a specified index in string
var c='hello word';
var char= c.charCodeAt(0);
console.log(`charCodeAt`,char);

//javaScript String split()
//A  string can be convertd to an array with the split() methode
let S="1,2,34,5,5";
let sp=S.split(",");//split on commas
console.log(`it is split`,sp);
//(5) ['1', '2', '34', '5', '5']
let S1="1, 2, 34, 5,5";
let s=S1.split(" ");//split on space
console.log(`it is split by space`,s);
//(4) ['1,', '2,', '34,', '5,5']
let S2="1, 2, 34, 5,5";
let s1=S2.split(`it is split on pipe`," |");//split on pipe
console.log(s1);
// ['1, 2, 34, 5,5']
//padStart methode this methd add the text befoet given string lenth
var d="5";
var n= d.padStart(9,"0");
console.log(`it is padstart`,n);
// output- 000000005

//padEnd methode-this methode add the text ofter the given the string length
