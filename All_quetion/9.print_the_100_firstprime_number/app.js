let number = 1;
let sum = 0;
let calprimeNumber = [];//store the new valuw...
do {
    if (isprime(number)) {
        calprimeNumber.push(number);
      //  console.log("callprime " + calprimeNumber);
    }
    number++
} while (calprimeNumber.length < 100)

sum += calprimeNumber;

function isprime(num) {
    var sqretnum = Math.floor(Math.sqrt(num));
    console.log("squire value "+sqretnum);

    var prime = num != 1;//num is nat equial 1......
    //console.log("before :",prime)
    for (var i = 2; i < sqretnum + 1; i++) {
        if (num % i == 0) {
            prime = false
            break;
        }
    }
    // console.log("after prime ",prime)
    return prime;
    
} console.log(calprimeNumber);
