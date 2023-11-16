//get the middle charecter if word charecter it the word lentgh is odd returen the meddle charecter it words lenght is even return the middle 2 charecter

  
function getMiddle(str)//eye //trucks
      
  {
    if (str.length % 2 == 1) {//3 
      let a1=str.substring((str.length / 2)+1, (str.length / 2)) ;//1+1=2,0
      console.log(a1)//2
    } else if (str.length % 2 == 0) {//
       let a2=str.substring((str.length / 2)-1, (str.length / 2)+1);//6/2=3-1=(2) ,6/2=3+1=4
       console.log(a2);//(2,4)
    }
  }getMiddle("trucks");
  
  