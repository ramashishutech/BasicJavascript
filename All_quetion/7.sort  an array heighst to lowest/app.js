//Q.7 short an array lowest to highst
var array =[12,3,4,2,6];

 for(let i=1;i<array.length;i++){
  // console.log(i);
    for(let index;index<i;index++){

        console.log(index);
        if(arr[index]>arr[i]){ //this is chek if arry index[x]is greterthan arry[z]
            var store=arr[i]; //store variable store the value of arr[z]
            arr[i]=arr[index];     //the arry [z] store in array [x]          
            arr[index]=store; //arry[x]value is store in store variable
            
        } 
        
    }
 console.log(store);

 }

