//canvart  age to day


   function calculateAgeInDays(birthDate) {
    const today = new Date();
    console.log("today "+today);
    const birth = new Date(birthDate);
    console.log("birth "+birth)
    const diffTime = Math.abs(today - birth);
    console.log("difrent time "+diffTime)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log("digrent day "+diffDays)
    return diffDays;
  }
  
  // Replace 'YYYY-MM-DD' with the person's birthdate in 'YYYY-MM-DD' format
  const birthDate = '2002-07-18'; // For example
  const ageInDays = calculateAgeInDays(birthDate);
  console.log("Age in days:", ageInDays);
