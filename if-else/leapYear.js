let year = 2034;
if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
    console.log("Year " + year + " is a Leap Year");
}
else {
    console.log("Year " + year + " is not a Leap Year");
}
