
//Q 4-->create a function that filter out the negative number in array?

function filterNigativeNumber() {
    

    var a=[1,-2,34,-5,6]
    var nigative=[];
    for (let i = 0; i < a.length; i++){
        if (a[i]<=0) {
           // console.log(a[i]);
               nigative.push(a[i]);
      
        }
      
    } console.log(nigative);}
    filterNigativeNumber();
    //out put -2 ,-5