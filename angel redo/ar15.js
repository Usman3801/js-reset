//fizzBuzz
var output = [];
function fizzBuzz(number){   
    for(var i = 1; i <= number; i++){
        if(i % 3 == 0 && i % 5 == 0){
            output.push("fizzBuzz");
        }
        else if(i % 5 == 0){
            output.push("Buzz");
        }
        else if(i % 3 == 0){
            output.push("fizz");
        }
        else {
            output.push(i);
        }
    };
    console.log(output);
}
fizzBuzz(100);

/*Things i noticed
` logic should start from checking both numbers 
`each code in a for loop is a statement on its own */