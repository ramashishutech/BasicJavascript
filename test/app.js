//how to revers  a string in javascript using function

  var str="This is Ashish"
  var l=str.length
  var revers=" ";
  console.log(l);//14
  for(let i=l-1;i>=0;i--){//
    console.log(i);// 13,12,11,10,9,8,7,6,5,4,3,2,1,0
    revers +=str[i];
    console.log(" revrs value "+revers);
    // h ,hs,hsi,hsih,hsihsA  ,hsihsA s, hsihsA si ,hishsA si s,hishsA si si,hishsA si sihT

  }
  console.log(revers);//hsihsA si sihT


