let text="eye"
let l=text.length;
//console.log(l);
function polidramcheck(){

    for(let i=0;i<l/2;i++){
       // console.log(i);
        if(text[i]!==text[l-1-i]){//5-1=4-0=4
            console.log("this is not palindrame")
            break
        }
        else{
            console.log("this is palindrome")
        }
    }
}
polidramcheck();
//civic,rader level,rotor,kayak,madam,refer,redivider,kinnikinnik,tattarratttat