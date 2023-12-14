// javascrit program to marge property in an object

var empolye = {
    Name: "Ashish",
    Address: "bhagirathpur",
    pin: 1232,
    profetion: "lebar",

}
//console.log(empolye);
var details = {
    district: "Ghazipur",
    state: "up",

}
//console.log(details);
// marge property using sprate opreter(...)

var information = {
    ...empolye,
    ...details
}
console.log(information);

