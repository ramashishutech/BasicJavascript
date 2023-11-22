function sumPrimes(num) {
var primearray = [];
  var sum = 0;
  for(var i =2; i <= num; i++){
    primearray.push(i);
  }

  for(var j = 0; j < primearray.length; j++) {
    console.log(primearray[j]);
    if ((primearray[j]%2===0) && (primearray[j] >2)) {
      primearray.splice(j,1);
    } else if ((primearray[j]%3===0) && (primearray[j] > 3)) {
      primearray.splice(j,1);
      console.log(primearray);
    } else if ((primearray[j]%5===0) && (primearray[j] > 5)) {
      primearray.splice(j,1);
    } else if ((primearray[j]%7===0) && (primearray[j] > 7)) {
      primearray.splice(j,1);
    }
  }
  sum = primearray.reduce();
  return sum;
}

sumPrimes(100);