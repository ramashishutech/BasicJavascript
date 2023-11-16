// //facoralic a number return the  factorieal of frouided integer
// //n=5  1*2*3*4*5=120
function factrialnumber(number){

// checking if number is negative
if (number < 0) {
    alert('negative number is nat exit');
}

// if number is 0
else if (number === 0) {
    alert (`The factorial of ${number} is 1.`);
}

// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
        alert(`The factorial of ${number} is ${fact}.`);
}
}
  factrialnumber(prompt("plese enter the postive number"));

 