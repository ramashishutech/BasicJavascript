let number = 1;
let sum = 0;
let calprimeNumber = [];//store the new valuw...
do {
    if (isprime(number)) {
        calprimeNumber.push(number);
    }
    number++
} while (calprimeNumber.length < 100)

sum += calprimeNumber;
//console.log('type of is :', typeof sum);
function isprime(num) {
    var sqretnum = Math.floor(Math.sqrt(num));

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
}console.log(calprimeNumber);