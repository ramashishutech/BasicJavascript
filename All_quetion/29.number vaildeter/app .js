
let array = [
    { "countrycode": "+91", "Num": 10 },
    { "countrycode": "+1", "Num": 6 },
    { "countrycode": "+51", "Num": 4 },
    { "countrycode": "+01", "Num": 5 },
    { "countrycode": "+92", "Num": 8 },
    { "countrycode": "+62", "Num": 9 },
];


function numberVailedeter(contrycode, number) {

    for (var i = 0; i < array.length; i++) {
        console.log("it's i value "+i);
        if (array[i].countrycode == contrycode) {

            var n = number.toString();
            //console.log(n);

            if (array[i].number == n.length) {
                console.log(array[i])

                console.log("true");

                break;

            }
            console.log("false");
        }
        
    }


}

var a = numberVailedeter("+91", 7565852145);
   console.log(a);