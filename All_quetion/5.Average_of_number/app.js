//Q 5;-calculate the average of the nnumbers in a array of number

function avergeOfNo() {
    

    var a=[1,2,3,4,5]
    var sum=0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i];
        
    }console.log(`it is sum`,sum)
    console.log(`it is Average`,sum/a.length);
    }avergeOfNo();

    //out put = 3