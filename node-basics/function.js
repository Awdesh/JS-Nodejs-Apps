function greetUser (firstName, lastName) {
	console.log('Hello ', firstName + ' ' + lastName);
}

greetUser('Awdesh', 'Sharma');

function greetUser1 (firstName, lastName) {
	return 'Hello '+ firstName + ' ' + lastName;
}

var greeting = greetUser1('Awdesh', 'Sharma');
console.log(greeting);

function add(a, b){
	return a + b;
}

console.log(add(2,3));