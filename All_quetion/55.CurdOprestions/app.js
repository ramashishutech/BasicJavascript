var id = 1;
var arr = [];
function Student(a, b, c, d) {
    this.emplyeId = id;
    this.name = a;
    this.age = b;
    this.gender = c;
    this.address = d;

}
function creatObject() {
    let a = document.getElementById("name").value
    let b = document.getElementById("age").value
    let c = document.getElementById("gender").value
    let d = document.getElementById("address").value

    var student = new Student(a, b, c, d);


    // console.log(student);
    arr.push(student)
    // console.log(arr);


    readData()


}
function readData() {

    arr.forEach(element => {
        console.log(element);

    });
}

