let name = prompt("Please enter your name: ");
let unitsCompletedInput = prompt("Please enter the number of units completed at college: ");

let unitsCompleted = parseInt(unitsCompletedInput);
if (Number.isNaN(unitsCompleted) || unitsCompleted < 0 || !Number.isInteger(unitsCompleted)) {
  console.log("Invalid input. Please enter a avlid integer for the number of units completed.");
} else {
  let gradeStanding = "";
  if (unitsCompleted >= 0 && unitsCompleted <= 30) {
    gradeStanding = "Freshman";
  }
  else if (unitsCompleted <= 60) {
    gradeStanding = "Sophomore";
  }
  else if (unitsCompleted <= 90) {
    gradeStanding = "Junior";
  }
  else {
    gradeStanding = "Senior";
  }
  
console.log("Hello " + name);
console.log("Your grade standing is " + gradeStanding);
}

