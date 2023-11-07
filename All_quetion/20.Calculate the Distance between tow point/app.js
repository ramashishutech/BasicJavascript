//creat function to calculate the distence between two point
function destense() {
    let x1 = 5;
    let x2 = 6;
    let y1 = 7;
    let y2 = 9;
    let d1 = Math.pow(x2 - x1, 2);
    //console.log(d1);
    let d2 = Math.pow(y2 - y1, 2);
    //console.log(d2);
    let destense = Math.sqrt(d1 + d2);
    console.log(destense);



}
destense();




