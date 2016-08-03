function greet(){
    console.log('Good afternoon');
    
    function greet1(){
        console.log("Hello" + ' from greet1');
    }
    
    return greet1;
}

var g = greet();
g();
