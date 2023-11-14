function numbervailedeter(contrycode,number){
    let numbercode=["+91","355","213",'1','376','344','244','1','1','54','374','297','61','672','43','994','1','973','880','1','375','501','229','1','975','591','387','267','55','1','673','359','226','257','855','237','1','238','1','236','235','56'];
    let l=number.toString().length;
    //console.log(l);
        for(let i=0;i<=numbercode.length;i++){
           

            if(numbercode[i]==contrycode){
                console.log("india"+i);
            }
            else{
                console.log("invailid number")
            }
        }
    
 
    // if(contrycode== +91 && l==10){
    //     console.log("india");
    // }
    // else{
    //     console.log("invalide number");
    // }
}numbervailedeter('+91',75658521);