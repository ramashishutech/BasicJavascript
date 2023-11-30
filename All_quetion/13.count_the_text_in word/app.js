
function textCount() {
    var word = "ram goes to home";
    var count = 0;
    for (let i = 0; i < word.length; i++) {
        
        if (word[i] == " ") {//" "==" " r == ""
            
          console.log("it's "+count);
        } else
            count++//
    }console.log(" count value "+count);


}
textCount();
