// function exitKey(key){
//     const student = {
//         Name: "Ashish",
//         age: 23,
//         course: "Adca"
//     };
      
//       let arr = Object.keys(student);
    
//       let result=arr
//    // console.log(result);
//     for(let i=0;i<result.length;i++){
//         console.log(result[i]===key);
//         if(result[i]===key){
            
        
//             console.log("true");
//             break
//         }else{
//             console.log("false");
//         }
//     }
// }exitKey("Address")

function exitKey(key){

var arr=[12,34,54,65];
for(let i=0;i<arr.length;i++){
  //  console.log(i);
    if(arr[i]==key){
    
        console.log("true")
      break

    }else{
        console.log("false")
    }
}
}exitKey(4)