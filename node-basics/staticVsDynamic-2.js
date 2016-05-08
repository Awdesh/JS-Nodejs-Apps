var myVar = 100;
 
function foo() {
  console.log(myVar);
}
 
foo(); // Static scope: 100; Dynamic scope: 100
 
(function () {
  myVar = 50;
  foo(); // Static scope: 100; Dynamic scope: 50
})();

// Higher-order function
(function (arg) {
  myVar = 1500;
  arg();  // Static scope: 100; Dynamic scope: 1500
})(foo);