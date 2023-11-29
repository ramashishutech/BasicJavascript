//print the first to 10 febnocicnumber


// function febnocicNumber(number) {

//     var n1 = 0;
//     var n2 = 1;
//     for (let i = 2; i < number; i++) {
//         console.log(n1);
//         var fib = n1 + n2;

//         n1 = n2;
//         n2 = fib;

//     }
// }
// febnocicNumber(prompt("Enter the number"));

var number=10;
var add=0;
var n1 = 0;
var n2 = 1;
console.log(n1);
console.log(n2);

for (let i = 2; i < number; i++) {
   
    var fib = n1 + n2;

    n1 = n2;
    n2 = fib;
   
    console.log(fib);
    add+=fib

}
console.log(add);