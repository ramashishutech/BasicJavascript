//this is immediately invoked function syntex


//this is multiply
(function (x, y) {
    console.log(x * y)
})(13, 9);
// output => 117
//this is devision
(function (a, b) {
    console.log(a / b)
})(144, 12);//12
//this is add
(function (a, b) {
    console.log(a + b);

})(3, 4);//7

//this is subraction

(function (a, b) {
    console.log(a - b);

})(3, 4);//-1


    //(function(given pramiter){
    //here write the code
    //}(given argument));
    (function () {
        console.log("self executalble funtion");
    })();//self



//this is print the console

function add(a, b) {
    return(a + b);
} 

console.log(add(20, 30));//
