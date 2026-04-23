//Leap Year Challenge
/*A year is a leap year if it is evenly divisible by 4 ;

except if that year is also evenly divisible by 100;

unless that year is also evenly divisible by 400.

 */
let year = prompt("Enter the year you want to calculate");
function leapYear(year){
    if (year % 4 == 0){
        alert("This year is a leap year")
    }
    else if(year % 100 == 0){
        alert("This year is not a leap year");
    }
    else if(year % 400 == 0){
        alert("This is a leap year");
    }
    else{
        alert("This is not a leap year");
    }
}
leapYear(2400);