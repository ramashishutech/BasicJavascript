//Q10- revers a string?

var a=`this is your house`;
var l=a.length
console.log(l);
var reverce ='';
for (let i = l-1; i >0;i--){
    console.log("it is i value "+i);//17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1
    reverce +=a[i];
    console.log("it is reverc value "+reverce);
}console.log(reverce);