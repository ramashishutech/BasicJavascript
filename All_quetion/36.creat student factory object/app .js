// create student factry object
//example student(rahul 21 ,jalalbad)

function student(name ,age){

    return{
        name:name,
        age:age,
        sayhello:function(){
            console.log("hello,My name is " +" "+ this.name );
        }
    };
}
let student1=student("Ashish",23);
student1.sayhello();