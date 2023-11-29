//truncate a string first argument if it is longer than given maximum string lenght(second argument)return the runcated string with a .....

function trancat(str,l){  
        let truncatedStr = str.substring(0, l); // get the first 10 characters  
        console.log(truncatedStr + "...");   
}
trancat("ASHISH",3);

// second way
// function trancat(str,l){
//         //let cat=" ";
// for (let i = 0; i=str.l; i++) {
//         if(i===l){
//             console.log(i);
//         }
//         // console.log(i);
//         // cat+= [i]
//         // console.log(cat+"...")
// }
// this is try

// }(trancat("Ashish",3));

// let str="this is javaScript";

// for (let index = 0; index <=str.length-2; index++) {
//         let toatl=" ";
//         const element = str[index];
//         toatl+=str[index]
//         console.log(toatl);
//        // console.log(element);
// //         if(str[index]==="is"){
// //          console.log("true");
         
// //         }
// //         else{
// //    console.log("false")
//         }
        
