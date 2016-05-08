// https://medium.freecodecamp.com/lets-learn-javascript-closures-66feb44f6a44#.lctpwdpgv

// below code is from the above medium blog post.

var x = 10;
function foo(a){
  
  var b = 20;
  function bar(c){
      var d = 30;
      return boop(x+a+b+c+d);
  }
  
  function boop(e){
      return e * -1;
  }
  
  return bar;
};

// below line will initialize x=10, a=5, b=20
// and method bar and boop. And it's a closure.
var moar = foo(5); // closure

console.log(moar(15));