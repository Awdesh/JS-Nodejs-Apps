// An array is javascript can take any thing that can be a var
// i.e. string, boolean, undefined, number etc.
var grades = [100,50, true, 'grade', undefined];
grades.push(34);
grades.unshift(74);

for (var i = grades.length - 1; i >= 0; i--) {
	console.log(grades[i]);
};

var totalGrade = 0;
grades.forEach(function(grade){
	// below will add all the items inside the array independent of data types.
	totalGrade += grade;
});

// 151gradeundefined
console.log(totalGrade);


// in javascript we don't always require to give function a name unless we want to 
// refer/call that function. Below we don't need to defined function name inside forEach.
// below if the function call back function, where we tells forEach to use callback everytime there is an item in array.
var totalGrade = 0;
grades = [100,50,50,23];

grades.forEach(function(grade){
	totalGrade += grade;
});

// 223.
console.log(totalGrade);




// array.push , adds an item to the end of array
//array.pull , retrieves an item to the end of array
// array.shift, retrieves an item to the begining of array
//array.unshift, adds an item to the begining of array