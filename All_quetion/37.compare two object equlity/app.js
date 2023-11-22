// comere the two object
 
// let student={
//     Name:"Ashish",
//     age:12,
//     course:"Adca"
// }
// let student1={
//     Name:"Rahul",
//     age:16,
//     course:"Adca"
// }
// for(const [key ,value] of Object.entries(student)){
//     console.log(`${key}:${value}`)

// }
// console.log(_.isEqual(student, student1));
// for (const [ key,value] of Object.entries(student1)) {
//     console.log(`${key}: ${value}`);
    
// }

//for (const [key, value] of Object.entries(student)) {
//     //console.log(`${key}: ${value}`);
// }
//if(Object.entries(student)===Object.entries(student1)){

//     console.log("true");
// }
// else{
//     console.log("false")
// // }
// if(student[key,value]===student1[key,value]){
//     console.log("true");
// }
// else{
//     console.log("false")
// }


// let a = { age: 29, name: 'Dionysia'};
// let b = { name: 'Dionysia', age: 29};

// // console.log(_.isEqual(a, b)); // true 
// let a = { age: 29, name: 'Dionysia'};
// let b = { name: 'Dionysia', age: 29};

// console.log(_.isEqual(a, b)); 

function exitKey(key){
const population = {
    Name: "Ashish",
    age: 23,
    course: "Adca"
  };
  
  let genders = Object.keys(population);
  console.log(genders);

let result=genders
console.log(result);
for(let i=0;i<result.length;i++){
    if(result[i]===key){
    
        console.log("true");
        break
    }else{
        console.log("false");
    }
    // console.log(ex);
}
}exitKey("course");