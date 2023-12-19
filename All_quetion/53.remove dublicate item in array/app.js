// // //javaScript program to marge to array and remove dublicate array
// var arr1 = [12, 13, 14, 15, 16, 17, 19];
// var arr2 = [1, 3, 4, 15, 13, 43, 23, 14]
// var arr3 = [];
// for (let i = 0; i < arr1.length; i++) {
//    // console.log(arr1[i]);
//     for (let index = 0; index <arr2.length; index++) {
//        // console.log(arr2[index]);
//      if(arr1[i]==arr2[index]){

//         arr3.push(arr1[i]);
//      }
//      else{

//      }
//     }
//     console.log(arr3);
// }

var arr1 = [12, 13, 34, 54, 67, 54];
var arr2 = [12, 34, 22, 32, 43, 22]
var arr3 = arr1.concat(arr2);//this methode marge to arry
var arr4 = [];
console.log(arr3);
for (let i = 0; i < arr3.length; i++) {
   if (arr4.indexOf(arr3[i]) === -1) {

      arr4.push(arr3[i]);
   }
}
console.log(arr4);