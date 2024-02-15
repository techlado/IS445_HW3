let input;

do {
  input = prompt("Please enter a day of the week (three-letter abbreviation in lowercase):");
  if (!/^(sun|mon|tue|wed|thu|fri|sat)$/.test(input)) {
      alert("Invalid input. Please enter a valid three-letter abbreviation in lowercase (sun, mon, tue, wed, thu, fri, or sat).");
  }
} while (!/^(sun|mon|tue|wed|thu|fri|sat)$/.test(input));

const dayEntered = input;

let followingDay;
switch (input) {
    case "sun":
        followingDay = "mon";
        break;
    case "mon":
        followingDay = "tue";
        break;
    case "tue":
        followingDay = "wed";
        break;
    case "wed":
        followingDay = "thu";
        break;
    case "thu":
        followingDay = "fri";
        break;
    case "fri":
        followingDay = "sat";
        break;
    case "sat":
        followingDay = "sun";
        break;
}

alert(`You entered: ${dayEntered}\nThe following day is: ${followingDay}`);
