let company = {
    name: "Ashish",
    pay: function () {
      console.log("Paying");
    },
  }; //company object
  let worker = {
    id: 1,
    work: function () {
      console.log("Working");
    },
  }; //worker object
  worker.__proto__ = company; //worker object inherits company object
  console.log(worker);
  worker.pay(); // calling method from company object using worker object.
  
  let student={
    Name:"Ashish",
    Age:23,
    Address:function(){
        console.log("this is student list");
    },
  };let studentgirl={
    roll:1,
    course:function(){
        console.log("this is student girl");
    },
  };
  studentgirl.__proto__= student;
  console.log(studentgirl)
  studentgirl.Address();
  