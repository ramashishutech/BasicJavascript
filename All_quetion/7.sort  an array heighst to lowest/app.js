//Q.7 short an array lowest to highst
// var arr = [12, 3, 4, 2, 6];

// for (let i = 1; i < arr.length; i++) {
//     // console.log(i);
//     for (let index = 0; index < i; index++) {

//         // console.log(index);
//         if (arr[index] > arr[i]) { //this is chek if arry index[x]is greterthan arry[z]
//             var store = arr[i]; //store variable store the value of arr[z]
//             arr[i] = arr[index];     //the arry [z] store in array [x]          
//             arr[index] = store; //arry[x]value is store in store variable

//         }
//         console.log(store);


//     }

// }

var arr = [12, 3, 24,45, 10];
var l = arr.length;
//console.log(l);
for (let index = 1; index < arr.length; index++) {
    // console.log(arr[index]);
    for (let i = 0; i < index; i++) {
        //  console.log(arr[i]);
        if (arr[i] >arr[index]) {
            var store = arr[index];
            arr[index] = arr[i];
            arr[i] = store

        }
        console.log(store);
    }

}