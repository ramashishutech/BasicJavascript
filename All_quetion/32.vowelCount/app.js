

function count(string) {

  
    var n = string.length;
    console.log(n); //calculated length of string//5
    var Countvowels = 0;
    for (i = 0; i < n; i++) {
      if ((string[i] == "a") || (string[i] == "e") || (string[i] == "i") || (string[i] == "o") || (string[i] == "u")||(string[i] == "A") || (string[i] == "E") || (string[i] == "I") || (string[i] == "O") || (string[i] == "U")) {
         console.log(string[i]); //A i E
        Countvowels += 1;
      }
    }
  
    alert ("Vowels :-"+ " "+ Countvowels);
  }count(prompt("Enter the string"));//AnilE
                                      //01234