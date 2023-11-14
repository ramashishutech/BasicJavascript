//voewls count( a,e,i.o.u)-return the number (count)of voewls in the given string the input string will only contrist of lower case latter and or space


function count(string) {

   // console.log(a); //to see input string on console
    n = string.length;
   // console.log(n); //calculated length of string
    var Countvowels = 0;
    for (i = 0; i < n; i++) {
      if ((string[i] == "a") || (string[i] == "e") || (string[i] == "i") || (string[i] == "o") || (string[i] == "u")||(string[i] == "A") || (string[i] == "E") || (string[i] == "I") || (string[i] == "O") || (string[i] == "U")) {
       //  console.log(string[i]); 
        Countvowels += 1;
      }
    }
  
    alert ("Vowels :-"+ " "+ Countvowels);
  }count(prompt("Enter the string"));