// create a function to calculate the sum of all the number in a jaiked array

// var sum = 0;
// let arr = [
//    5,
//    7,
//    [ 4, [2], 8, [1,3], 2 ],
//    [ 9, [] ],
//    1,
//    8
// ];

// function findSum(arr) {
//     arr.forEach((item) => {
   
//     // will check if first element is number then will add to sum
  
//       if (typeof item === 'number') {
//         sum += item;
//       } else {
        
//         // checks if coming element is again array then repeat the operation
//         findSum(item);
        
//       }
//     });
//   } 
  findSum(arr);
  console.log(sum);

  let arey=[12,3[22,[34,[]],12]]
  total=0;
  function add(){
    arey.forEach((item)=>{

      if (typeof item === "number"){
          total += item
      }else{
        add(item)
      }
    });

  }add(arey);
  console.log(arey(total));
  
 