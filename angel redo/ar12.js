var n = Math.random();
// simulating a dice role
n = Math.floor(n * 6) + 1;
console.log(n);

//Love Calculator 
let firstName = prompt("Your Name:");
let secondName = prompt("Your Spouse's Name:");
let lovePercentage = Math.floor(Math.random() * 100) + 1;

//adding conditionals
if(lovePercentage === 100){
    alert("Your love percentage is " + lovePercentage +"%. Marry each other now!");
}
else if(lovePercentage >= 70){
    alert("Your love percentage is " + lovePercentage +"%. You love each other like Kanye loves Kanye!");
}
else if(lovePercentage >= 50){
    alert("Your love percentage is " + lovePercentage +"%. You still have a chance.");
}
else{
    alert("Your love percentage is " + lovePercentage +"%. tf you're doing together?");
}