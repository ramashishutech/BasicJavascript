// user of break
/*
for (let counter = 0; counter <= 10; counter++) {
    if (counter == 5) {
        // break;
        continue;
    }
    document.write(counter)
    document.write('<br>')
}

*/






// for (let index = 0; index <= 10; index++) {

//     document.write('ashish')
//     document.write('<br>')
//     for (let i = 0; i <= 5; i++) {  
//         document.write('kumar')
//         document.write('<br>')
//         if(i==2){
            
//             document.write('kumar')
//             document.write('<br>')
//             break;
//         }
//     }
// }

outer:for (let index = 0; index <= 10; index++) {

    document.write('ashish')
    document.write('<br>')
    for (let i = 0; i <= 5; i++) {  
        document.write('kumar')
        document.write('<br>')
        if(i==2){
            
            document.write('kumar')
            document.write('<br>')
            break outer;
        }
    }
}




