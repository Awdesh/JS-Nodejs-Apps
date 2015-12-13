// var mongodb = require('mongodb');

// var uri = 'mongodb://localhost:27017/example';

// // callback method is been passed.
// mongodb.MongoClient.connect(uri, function(error, db) {
// 	if(error) {
// 		console.log(error);
// 		process.exit(1);
// 	}

// var doc = {
// 	title : "Jaws",
// 	year: 1975,
// 	director: "Steven Spielberg",
// 	rating: 'PG',
// 	ratings: {
// 		critics: 80,
// 		audience: 97
// 	},
// 	screenplay: ['Peter Benchley', 'Carl Gotlieb']
// };

// db.collection('movies').insert(doc, function (err, res) {
// 	// body...
// 	if(err){
// 		console.log(err);
// 		process.exit(1);
// 	}

// var query = {year:1975};
// var query1 = {year:1975, rating:'PG'};

// // toArray is been passed to iterate over array items.
// db.collection('movies').
// 	find({'ratings.audience' : {'$gte' :97 }}).
// 	toArray(function (err, docs) {
// 	if(err){
// 		console.log(err);
// 		process.exit(1);
// 	}

// 	console.log('Found docs....');
// 	docs.forEach(function(doc) {
// 		console.log(JSON.stringify(doc));
// 	});
// 	process.exit(0);	
// 	});
//  });
// });


var fn = require('./myFile');
fn();

var otherFn = require('./test').other;
otherFn();

var newFn = require('./test').newFile;
newFn();