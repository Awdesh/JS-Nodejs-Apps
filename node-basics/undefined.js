var name;
// undefined is the default value of variable if we don't supply var.
console.log(name);

function getName (argument) {
	// when function doesn't return anything 
	// that means it returns undefined.
}

console.log(getName());

// check var x is undefined.
if(typeof x === 'undefined'){
	console.log('x is undefined');	
}

function greetUser(name){
	if(typeof name === 'undefined'){
		console.log('name is undefined')
	} else {
		console.log('Hello Awdesh')
	}
}

greetUser('Awdesh');
greetUser();
