function fibonacci(n){
    let sequence = [];
    let a = 0;
    let b = 1;
    for(let i = 0; i < n; i++){
        if(i == 0) {
            sequence.push(a);
        }
        else if(i == 1){
            sequence.push(b);
        }
        else{
            let next = a + b;
            sequence.push(next);
            a = b;
            b = next;
        }
    }
    return sequence;
}
console.log(fibonacci(50));