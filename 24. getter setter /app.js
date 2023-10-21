/*
var person = {
    name: "ashish",
    age: 22,
    get getName() {
        return this.name.toUpperCase()
    }
}
console.log(person);
console.warn(person.getName);

 */


var person = {
    name: "ashish",
    age: 22,
    set setName(n) {
        return this.name=n.toUpperCase()
    }
}
person.setName="kumar"
// console.warn(person.setName);
console.log(person);