const object1={a:1,b:2};
const object2={a:1,b:2};
console.log(object1===object2);//this result will be false becouse difrent object in memory

const comprisen=(object1,object2)=>{
    const keys1=Object.keys(object1);// object key use the  convart object to array
    console.log(keys1); //"a","b" print key an array
    
    const keys2=Object.keys(object2);
    console.log(keys2);//"a","b" print key an array
    if(keys1.length!== keys2.length){//this condition cheack if key1 lenght and key2 not equil
        console.log("length1 "+keys1.length);
        console.log( "length2 "+keys2.length);
        console.log("false");//return false
    }
    for(let key of keys1){//use for of loop
        if(object1[key]!==object2[key]){//if object key not equial
            console .log(object1[key]);
            console.log("false");//return false
        }
        console.log("true");
    }
    
}
comprisen(object1,object2);