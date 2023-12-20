var empolyeId= 1;
var container = []

function Student(a, b, c, d) {
  this.id=empolyeId;
  this.firstName = a;
  this.age = c;
  this.gender = d;
  this.address=b;
}
function creatObject() {
  
  let a = document.getElementById("name").value
  let b = document.getElementById("Age").value
  let c = document.getElementById("Gender").value
  let d = document.getElementById("Address").value
 
  var student = new Student(a, b, c, d);
  container.push(student);
  rederTbl();
  empolyeId++;
  

  
 
}