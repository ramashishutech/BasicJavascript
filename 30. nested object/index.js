// nested object
let obj = {
    name: "ashish",
    age: 21,
    address: {
        village: "bhagirathpur",
        post: "jalalabad",
        familymembers: {
            father: "xyx",
            mother: "xyy",
            brother: "xyx"
        }
    },
    add: function(a,b){
        return a + b;
    }
}

console.log("obj",obj)
console.log("obj",obj.address)
console.log("obj",obj.address.familymembers.brother)
console.log('SUM : ', obj.add(6,3));

