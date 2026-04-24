let name = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function payBill(names){
    var randomPerson = (Math.floor(Math.random() * names.length));
    var whoIsPaying = names[randomPerson];
    return  whoIsPaying + " is going to buy lunch today!";
}
payBill(name);