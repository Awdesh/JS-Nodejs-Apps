function greetUser(name) {
    // body...
    function greet(){
        //console.log("Hello", name);
        return name;
    }
    
    return greet;
}

var greetMaker = greetUser('Nibha');
console.log(greetMaker());

function createAdder(baseNumber) {
    // body...
    function add(numberToAdd){
        return baseNumber + numberToAdd;
    }
    
    // function mul(numberToMul){
    //     return baseNumber * numberToMul;
    // }

    return add;
}

var adder = createAdder(10);
console.log(adder(2)); // 12.
console.log(adder(0)); // 10.


// normal function.
function greetUser1(name){
    console.log(name);
}

greetUser1('Awdesh');