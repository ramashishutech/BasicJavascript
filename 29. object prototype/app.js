// function Student(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender
// }

// Student.prototype.mob = 9512682354;
// const student1 = new Student("ashish", 21, "male")
// console.log(student1.mob)

 

// const student2 = new Student("ashish", 21, "male")
// console.log(student2)
 //this is practice
 function empolye(id,name,age,){
    this.name=name,
    this.age=age,
    this.id=id
 }
 empolye.prototype.sallary=12000;
 empolye.prototype.state="uttar predes"
 const empolyer =new empolye(1,"Abhishek",18);
 console.log(empolyer);
 const  empolyer1=new empolye(2,"anajan",20);
 console.log(empolyer1);
 const empolyer2=new empolye(3,"rahul",17);
 console.log(empolyer2);
 const empolyer3=new empolye(4,"ravi",21);
 console.log(empolyer3);