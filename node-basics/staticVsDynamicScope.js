var x = 10;

function foo(){
    var y = x + 5;
    return y;
}

function bar(){
    var x = 2;
    return foo();
}

function main(){
    console.log(foo());
    console.log(bar());
    return 0;
};

main();