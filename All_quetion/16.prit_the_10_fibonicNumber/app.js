//print the first to 10 febnocicnumber
var number=10;
var n1=0;
var n2=1;
for (let i = 2; i < number; i++) {
    console.log(n1);
    var fib=n1+n2;
    n1=n2;
    n2=fib;
    
}