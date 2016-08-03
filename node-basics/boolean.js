var isValid = false;

// typeof property of javascript.
function checkType (booleanVar) {
	if(typeof booleanVar === 'boolean'){
		console.log(!booleanVar);
	} else {
		console.log('Warning! there is a problem');
	}
}

checkType(isValid);