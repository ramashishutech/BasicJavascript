let obj= new StudentConstructor("ashish","kumar")
let obj1= new StudentConstructor("ashissdfsh","kumasdfsdr")
let obj2= new StudentConstructor("ashisdfssh","kumarsdfds")

console.log(obj);
console.log(obj1);
console.log(obj2);

function StudentConstructor(first,last){
    this.firstName=first,
    this.lastName=last
}
