const object1={a:1,b:2};
const object2={a:1,b:2};
console.log(object1===object2);//this result will be false becouse difrent object in memory

const comprisen=(object1,object2)=>{
    const keys1=Object.keys(object1);
    console.log(keys1);
    
    const keys2=Object.keys(object2);
    console.log(keys2);
    if(keys1.length!== keys2.length){
        console.log("false");
    }
    for(let key of keys1){
        if(object1[key]!==object2[key]){
            console.log("false");
        }
    }
    console.log("true");
}
comprisen(object1,object2);