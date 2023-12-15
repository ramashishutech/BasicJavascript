// is n Disiable by x and y? ceate a function that checks it a number n is disiable by two number x and y all  infot are passitive non Zero disits

function deviseable(x,y,n){
if(x%n===0 && y%n===0){
    console.log("true");
}
else{
    console.log("this number is not divesable by n");
}


}deviseable(12,16,4);