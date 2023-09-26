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
// this methode change the charecter the capital leter
var a=`abcdefghijklmnopqrstuvwxyz`;
console.log(a.toUpperCase);
// lowerCase
// this methode change the charecter the small leter
