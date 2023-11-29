
//Q 4-->create a function that filter out the negative number in array?

function filterNigativeNumber() {
    

    var a=[1,-2,34,-5,6]
    var len=a.length
    console.log(len);
    var nigative=[];
    for (let i = 0; i < len; i++){
       // console.log("it is i value "+i);
        if (a[i]<=0) {
            console.log(a[i]);
               nigative.push(a[i]);//-2,-5
               console.log("it is nagativ value "+nigative);//-2,-2 -5
      
        }
      
    } console.log(nigative);}
    filterNigativeNumber();
    //out put -2 ,-5