let person = {
    firstName: "ashish",
    lastName: "kumar",
    age: 22,
    accessOnePrope() {
        console.log(this.firstName)
        console.log(person.firstName)
        console.log(this.brand)
    }
};


let car = {
    brand: "maruti",
    model: "safari"
}
var secondProp = person.lastName
console.log(secondProp);

person.accessOnePrope()

