var result = [];

for(var i=0; i < 5; i++){
    result[i] = function(){
        console.log(i);
    };
}


result[0]();
result[1]();
result[2]();

// console.log('testing let.......');

// var result = [];

// for(let i=0; i < 5; i++){
//     result[i] = function(){
//         console.log(i);
//     };
// }


// result[0]();
// result[1]();
// result[2]();