//Q,2--->calculate the sum of number with in a array
var arry=[23,45,67,76,87,87];
sum=0;
for (let i = 0; i < arry.length; i++){
    sum += arry[i];//23,+45+67+76+87+87
    console.log("sum value "+sum);//23,68,135,211,289,385
}
console.log(sum)
//output 385