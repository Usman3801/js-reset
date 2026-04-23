//Arrays 
var guestList = ["Angela", "Jack", "Paul", "Socrates", "Minion"];
//add gru to the array
guestList.push("Gru");

let name = prompt("What is your name?");
if(guestList.includes(name) == true){
    alert("Welcome");
}
else{
    alert("Delete yourself now!");
}