// function test
function test() {
    var a = "3";
    var b = "8";
/*change value of a to b*/
    var c = b;
    var b = a;
    var a = c;
    console.log("a is " + a);
    console.log("b is " + b);

}
test();
