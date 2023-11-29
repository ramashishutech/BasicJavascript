

//Q.3-->create a function that revers on array

function reversArray(array) {

    var array=[1,2,5,6,8,4,2] 
    var len=array.length
    console.log(len);//7
    var empty=[];
    
    for (let i = len-1; i>=0; i--) {// run the loop 6,5,4,3,2,1,0
        // console.log("it is i value "+i);
        empty.push(array[i]); // 2,4,8,6,5,2,1
        //console.log(" it is empty value "+ empty);//
    }
    console.log(empty);
}
reversArray();
