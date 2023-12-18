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

// this is nested object 

let compny={
    compnyName:"genius corporation",
    compnyLcation:"up in ghazipur",
    compnyEmpolye:50,
    empolyedetels:{
    Id:1,
    Name:"Ashish",
    Age:21,
    Gender:"male",
    Addres:{
        village:"bhagirathpur",
        post:"jalalabad",
        dist:"ghazipur",
        state:"uttar predesh",
        contact:{
            email:"ramashishutech@gmail.com",
            mobileNo:7565852145,
            telphon:7584
        }
    }
}



}
console.log(compny);
console.log(compny.empolyedetels);
console.log(compny.empolyedetels.Id);
console.log(compny.empolyedetels.Name);
console.log(compny.empolyedetels.Age);
console.log(compny.empolyedetels.Gender);
console.log(compny.empolyedetels.Addres);
console.log(compny.empolyedetels.Addres.village);
console.log(compny.empolyedetels.Addres.post);
console.log(compny.empolyedetels.Addres.dist);
console.log(compny.empolyedetels.Addres.state);
console.log(compny.empolyedetels.Addres.contact);
console.log(compny.empolyedetels.Addres.contact.email)
console.log(compny.empolyedetels.Addres.contact.mobileNo);
console.log(compny.empolyedetels.Addres.contact.telphon);

;




