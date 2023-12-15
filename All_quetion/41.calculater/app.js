function insert(num){//this is insert function get number in a input box
// console.log(num);
 var a=document.getElementById("inputbox").value =document.getElementById("inputbox").value +num
//  var b=document.getElementById("inputbox").value
//  console.log("it is b value"+b);
//  var e=document.getElementById("inputbox").value + num

//  console.log("it is e value"+e);

 console.log(a);



}
function equal(){//this is a equal function
    var exp=document.getElementById("inputbox").value 
    // console.log("it is exp value "+exp);
    if(exp){
        document.getElementById("inputbox").value =eval(exp);//eval methad give a string pramiter and excute the code
        console.log(eval(exp));
    }
}
function backspace(){

    var back =document.getElementById("inputbox").value
    console.log(back);
    var l=back.lenght
    console.log(l);
    document.getElementById("inputbox").value=back.substring(0,l-1);
    console.log(back.substring(0,l-1));


}