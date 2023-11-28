function findHcf(){
    let hcf;

let number1=12;

let number2=14;
if(number1<=0 || number2 <=0 ){
    console.log(number1<=0 || number2 <=0 );
    hcf = 0;
    console.log(`HCF of ${number1} and ${number2} is ${hcf}.`);
}else{
    for (let i = 1; i <= number1 && i <= number2; i++) {
    
        // check if is factor of both integers
        if( number1 % i == 0 && number2 % i == 0) {
            hcf = i;
            console.log(hcf);
        }
    }
    console.log(`HCF of ${number1} and ${number2} is ${hcf}.`);   
}

}
findHcf()