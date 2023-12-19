

//creat a function that will recive two arrays,and will return and array with elements that are in the first array but not second array.

function findMissing() {
    var arr3 = [];
    for (let i = 0; i < l1; i++) {
        let j;

        for (j = 0; j < l2; j++)
            if (array1[i] == array2[j])
                break;

        if (j == l2)

            arr3.push(array1[i]);
    }
    console.log(arr3);
}


let array1 = [1, 2, 6, 3, 4, 5];
let array2 = [2, 4, 3, 1, 0];
let l1 = array1.length;
let l2 = array2.length;
findMissing();
