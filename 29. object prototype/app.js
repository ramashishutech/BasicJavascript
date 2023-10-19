function Student(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender
}

Student.prototype.mob = 9512682354;
const student1 = new Student("ashish", 21, "male")
console.log(student1.mob)

 

const student2 = new Student("ashish", 21, "male")
console.log(student2)
 