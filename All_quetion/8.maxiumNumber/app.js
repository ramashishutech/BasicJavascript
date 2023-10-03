//Q 8=find the maximum number in array of number 

var a=[12,54,65,76,89,90];
var max=[];
for (let i = 0; i < a.length; i++) {
    
    if (a[i]>max) {
        max = (a[i]);
        
    }
}console.log(`maximum number`,max);
//ou put =90;