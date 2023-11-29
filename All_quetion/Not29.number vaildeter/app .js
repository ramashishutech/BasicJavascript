
let list=[
    {"countrycode":"+91","Num":10},
    {"countrycode":"+1","Num":6},
    {"countrycode":"+51","Num":4},
    {"countrycode":"+01","Num":5},
    {"countrycode":"+92","Num":8},
    {"countrycode":"+62","Num":9},
];


function numbervailedeter(contrycode,number){
    
    for(var i=0;i<list.length;i++){
        if(list[i].countrycode ==contrycode){
            var n=number.toString();
            if(list[i].number==n.length){
                console.log("true");
                
            }
            
        }
           console.log("false");
    }
        
    
}numbervailedeter("+92",67658790);