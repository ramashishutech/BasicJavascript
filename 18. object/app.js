const obj = {
    name: "ashish",
    address: "bhagirathpur",
    age: 22
}
console.log("object is :", obj)


// how to manipulate object 

// to access all object 
console.log(obj)

// access any one property
console.log(obj.name)
console.log(obj.address)
console.log(obj.age)

// how to add property
obj.class = "BCA"

console.log(obj)


// how to delete property
delete obj.age

console.log(obj)


// how to update property
obj.name="ramashish"

console.log(obj)


for(let master in obj){
    

        console.log('master',master)
    
}
console.log(Object.keys(obj)[1]);






