

//Q.3-->create a function that revers on array

function reversArray(array) {

    var array=[1,2,5,6,8,4,2] 
    var empty=[];
    
    for (let index = array.length-1; index >=0; index--) {
         
        empty += array[index]; // 5
    }
    console.log(empty);
}
reversArray();
//out put -->9,8,7,6,5,4,3,2,1

// Array = [];
// array.length ==> 0
// for i = 1 , array.length small eq 100
// array.push ( odd number )