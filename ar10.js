//Human left over age calculator
function lifeInWeeks(age) {
    //asumming the max age for humans is 90
    var days = (90*365) - (age * 365);
    var months = (90 * 12) - (age * 12);
    var remainingWeeks = (90 * 52) - (age * 52);
    console.log("You have " + days + " days, " + remainingWeeks + " weeks, and " + months + " months left." );
}
lifeInWeeks(2);