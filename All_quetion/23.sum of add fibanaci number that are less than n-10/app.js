function addfibancinumber(number){

    var number;

var n1=0;
var n2=1;
let sum = 0;
for (let i = 2; i < number; i++) {
  // sum += i 
  
  // console.log(sum,"flgklfk");
    var fib=n1+n2;
    n1=n2;
    n2=fib;
    
}

}addfibancinumber(6);



// function fibonacci(num) {
//     let num1 = 0;
//     let num2 = 1;
//     let sum;
//     let i = 0;
//     for (i = 0; i < num; i++) {
//         sum = num1 + num2;
//         num1 = num2;
//         num2 = sum;
//     }
//     return num2;
// }
 
// console.log("Fibonacci(5): " + fibonacci(5));
// //console.log("Fibonacci(8): " + fibonacci(8));

function sumFibs(num) {
    var sum = 0;
    for(i=0,j=1,k=0; k<=num;i=j,j=x,k++) {
      x = i + j;
      if (x%2 !== 0) {
        sum +=x;
        if (sum >= sum) {
          break;
        }
      }
    }
    return sum;
  }
  console.log(sumFibs(10));