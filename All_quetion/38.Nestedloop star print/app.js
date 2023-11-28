


function nestedLoop(number){

        
    
    for(let i=0;i<=number;i++){
        console.log("it is i value "+i);
        let statr=" ";
        for( let j=1;j<=i;j++){
            console.log("it is j value "+j);
            statr+= "*"
            console.log("star "+ statr);//*,**,***,****,*****,******
        }
        //console.log(statr);
    }
    
}nestedLoop(5);
