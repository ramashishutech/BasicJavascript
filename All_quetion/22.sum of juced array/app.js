// create a function to calculate the sum of all the number in a jaiked array

var sum = 0;
let arr = [
   5,
   7,
   [ 4, [2], 8, [1,3], 2 ],
   [ 9, [] ],
   1,
   8
];

function findSum(arr) {
    arr.forEach((item) => {
   
    // will check if first element is number then will add to sum
  
      if (typeof item === 'number') {
      //console.log(item);//5,7,4,2,8,1,3,2,9,1,8
        sum += item;
       //console.log("it is sum value "+sum)//5,12,16,18,26,27,30,32,41,42,50
      } else {
        
        // checks if coming element is again array then repeat the operation
        findSum(item);
        
      }
    });
  } 
  findSum(arr);
  console.log("sum of jacked array :- "+sum);

  