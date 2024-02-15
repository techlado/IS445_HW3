let hours, minutes, seconds;

do {
    hours = prompt("Please enter the hours (0-23):");
    hours = parseInt(hours);
    if (!(Number.isInteger(hours) && hours >= 0 && hours <= 23)) {
        alert("Invalid input. Please enter a valid integer between 0 and 23 for hours.");
    }
} while (!(Number.isInteger(hours) && hours >= 0 && hours <= 23));

do {
    minutes = prompt("Please enter the minutes (0-59):");
    minutes = parseInt(minutes);
    if (!(Number.isInteger(minutes) && minutes >= 0 && minutes <= 59)) {
        alert("Invalid input. Please enter a valid integer between 0 and 59 for minutes.");
    }
} while (!(Number.isInteger(minutes) && minutes >= 0 && minutes <= 59));

do {
    seconds = prompt("Please enter the seconds (0-59):");
    seconds = parseInt(seconds);
    if (!(Number.isInteger(seconds) && seconds >= 0 && seconds <= 59)) {
        alert("Invalid input. Please enter a valid integer between 0 and 59 for seconds.");
    }
} while (!(Number.isInteger(seconds) && seconds >= 0 && seconds <= 59));

followingSecond = seconds + 1;
followingMinute = minutes;
followingHour = hours;
if (followingSecond === 60) {
    followingSecond = 0;
    followingMinute++;
    if (followingMinute === 60) {
        followingMinute = 0;
        followingHour++;
        if (followingHour === 24) {
            followingHour = 0;
        }
    }
}

alert(`Time input: ${hours}h${minutes}m${seconds}s\nOne second later: ${followingHour}h${followingMinute}m${followingSecond}s`);
