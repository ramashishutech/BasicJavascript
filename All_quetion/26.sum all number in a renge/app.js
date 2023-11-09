
// Sum of all number in rang
//ex-([4,2])

function rang([l,h]){//than give preamiter l for lowest value and h for highest value
 let sum=0;
 for (let i=l;i<=h; i++) {
    //console.log(i);
    sum+=i;//than coming data throw the i value that add in sum variable

 }
 return sum//than return the sum
    
 }
 console.log(rang(([7,12])));