//canvart  age to day


   function calculateAgeInDays(birthDate) {
    let today = new Date();
    console.log("today "+today);
    let birth = new Date(birthDate);
    console.log("birth "+birth)
    let diffTime = Math.abs(today - birth);
    console.log("difrent time "+diffTime)
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log("digrent day "+diffDays)
    return diffDays;
  }
  
  // Replace 'YYYY-MM-DD' with the person's birthdate in 'YYYY-MM-DD' format
  let birthDate = '2007-10-03'; // For example
  let ageInDays = calculateAgeInDays(birthDate);
  console.log("Age in days:", ageInDays);
