function maxNumber(arr) {
  max = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >max)
      max = arr[i];
  }
  console.log(max);
  var min=max;
  for(let i=0; i<arr.length-1;i++){
    if(arr[i]<min)
    min=arr[i];
  }
 console.log(min);
}
var a = maxNumber([12, 32, 45, 65, 76,8]);
console.log(a);



function counTextinword(string){
   var count=0;
   for(let i=0;i<=string.length-1;i++){
    if(string[i]==" "){
      //console.log(count);
    }else{
      count++
    }
    
   }
    console.log(count);

}
counTextinword(" my Name is Ashish kumar");

//find negative number in array

  function findnigativeNumber(arrayN){

    let l=arrayN.length//this is array length
    console.log(l);//this prin the arry length
    let nigative=[];//this emplty variable
    for(let i=0;i<l;i++){//this is for loop run to array lenght
      if(arrayN[i]<0){//check condition if array value lessthan zero
        nigative.push(arrayN[i]);//push method nagative value in nigative varable

      }

    }
    console.log(nigative);//console the nigative value


  }
   var number=findnigativeNumber([12,3,-4,5,-7,-21,-0]);
   console.log(number);
