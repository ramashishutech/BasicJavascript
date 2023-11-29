//Q 5;-calculate the average of the nnumbers in a array of number

function avergeOfNo() {
    

    var a=[1,2,3,4,5]
    var sum=0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i];//1 +2+3+4+5
       console.log("sum "+sum)//1,3,6,10,15
    }console.log(`it is sum`,sum)//15
    console.log(`it is Average`,sum/a.length);// 3
    }avergeOfNo();

    //out put = 3