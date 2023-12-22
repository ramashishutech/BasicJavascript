for(let i=0;i<5;i++){//printA
    if(i==0){
        console.log("   ** "   +  "    * * * * "  + "  *     *" +" * * * "+" * * * *"+"  *      *");
    }
    if(i==1){
        console.log( "  ** **  " +     " *  "             +   "       *     *" +"   * "+"   *"+"        *      *");
    }
    if(i==2){
        console.log(" ** ** **  "      +"* * * * "+" * * * *  "+" * "+"   * * * *" + "  *  * * *");
    }
    if(i==3){
        console.log("**      **"      + "        *"+" *     *  " +   " * " +    "         *" +"  *      *"         );
    }
    if(i==4){
        console.log("**       **"      +  " *  * *  "+"*     *" +" * * *" + "  * * * *"+"  *      *");
    }
    
}

 // Function to print the pattern of 'A' 
 const printA = () => { 
    let n = parseInt(width / 2), i, j; 
    for (i = 0; i < height; i++) { 
        for (j = 0; j <= width; j++) { 
            if (j == n || j == (width - n) 
                || (i == parseInt(height / 2) && j > n 
                    && j < (width - n))) 
                document.write("*"); 
            else
                document.write("  "); 
        } 
        document.write(`<br/>`); 
        n--; 
    } 
}
 // Function to print the pattern of 'S' 
 const printS = () => { 
    let i, j; 
    for (i = 0; i < height; i++) { 
        for (j = 0; j < height; j++) { 
            if ((i == 0 || i == parseInt(height / 2) 
                || i == height - 1)) 
                document.write("*"); 
            else if (i < parseInt(height / 2) 
                && j == 0) 
                document.write("*"); 
            else if (i > parseInt(height / 2) 
                && j == height - 1) 
                document.write("*"); 
            else
                document.write("  "); 
        } 
        document.write(`<br/>`); 
    } 
} 



 // Function to print the pattern of 'H' 
 const printH = () => { 
    let i, j; 
    for (i = 0; i < height; i++) { 
        document.write("*"); 
        for (j = 0; j < height; j++) { 
            if ((j == height - 1) 
                || (i == parseInt(height / 2))) 
                document.write("*"); 
            else
                document.write("  "); 
        } 
        document.write(`<br/>`); 
    } 
} 

  // Function to print the pattern of 'I' 
  const printI = () => { 
    let i, j; 
    for (i = 0; i < height; i++) { 
        for (j = 0; j < height; j++) { 
            if (i == 0 || i == height - 1) 
                document.write("*"); 
            else if (j == parseInt(height / 2)) 
                document.write("*"); 
            else
                document.write("  "); 
        } 
        document.write(`<br/>`); 
    } 
}
 // Function to print the pattern of 'S' 
 const printS1 = () => { 
    let i, j; 
    for (i = 0; i < height; i++) { 
        for (j = 0; j < height; j++) { 
            if ((i == 0 || i == parseInt(height / 2) 
                || i == height - 1)) 
                document.write("*"); 
            else if (i < parseInt(height / 2) 
                && j == 0) 
                document.write("*"); 
            else if (i > parseInt(height / 2) 
                && j == height - 1) 
                document.write("*"); 
            else
                document.write("  "); 
        } 
        document.write(`<br/>`); 
    } 
} 


// Function to print the pattern of 'H' 
const printH1 = () => { 
    let i, j; 
    for (i = 0; i < height; i++) { 
        document.write("*"); 
        for (j = 0; j < height; j++) { 
            if ((j == height - 1) 
                || (i == parseInt(height / 2))) 
                document.write("*"); 
            else
                document.write("  "); 
        } 
        document.write(`<br/>`); 
    } 
} 