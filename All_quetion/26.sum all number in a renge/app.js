
// Sum of all number in rang
//ex-([4,2])

function rang([l, h]) {//than give preamiter l for lowest value and h for highest value
   let sum = 0;
   console.log(l, h);//1,5
   for (let i = l; i <= h; i++) {
      console.log("it is i value "+i);//1,2,3,4,5
     // sum += i;//than coming data throw the i value that add in sum variable
      console.log( "sum " + sum);//0
   }
   return sum//than return the sum

}
console.log(rang(([1, 5])));//1+2+3+4+5=15