const correctPassword = "secret";
let attempts = 0;
let userInput = "";

do {
    userInput = prompt("Please enter the password:");
    attempts++;

    if (userInput !== correctPassword && attempts < 3) {
        alert("Incorrect password. Please try again.");
    }

} while (userInput !== correctPassword && attempts < 3);

if (userInput === correctPassword) {
    alert(`You entered the correct password after ${attempts} attempt(s).`);
} else {
    alert(`Your account is locked! You failed to enter the correct password ${attempts} times.`);
}
