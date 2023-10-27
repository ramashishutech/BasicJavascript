 var array1=[1,2,3,4,5]
 var array2=[1,2,3,8,9]
 var l1=array1.length
 console.log(l1);
 var l2=array1.length
 console.log(l2);

 for(var i=0;i<l1;i++){
    //console.log(array1[i])
    for(var j=0;j<l2;j++){
   // console.log(array2[j])
    }
    if(array1[i]==array2[j]){
        break
    }
    else{
        console.log(array1[i]);
    }
       
    
 }


