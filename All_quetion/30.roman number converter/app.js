function romanNo(num) {
  var roman = '';
  var i=0;
  var symble = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}
  for (  var i in symble ) {
    //console.log("it is value "+ i);
  
    while ( num >= symble[i] ) { //if number is greterand than equial symble[i]
      console.log(symble[i]);
      roman += i;  // add i value in roman n
      //console.log("roman "+roman);
     
      num -= symble[i];//subtract symble index value  in num
      //console.log("num "+num);

    }
  }
  alert("RomanNumber :-"+" "+ roman); //prent the roman number
  
}
console.log(romanNo(prompt("enter the number")))//roman number conve
