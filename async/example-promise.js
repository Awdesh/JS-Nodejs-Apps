// function doWorkPromise(data){
//     return new Promise(function (resolve, reject){
//         setTimeout(function(){
//             reject('something bad happened');
//         }, 1000);
//     });
// }

// doWorkPromise('some data').then(function(data){
//     console.log(data);
// }, function(error){
//     console.log(error);
// });

var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?appid=eb1d1a093ab72910d3b32544dbefcfcc';

function getWeather(city){
    encodeURIComponent(city);
    console.log(city);
    
    return new Promise(function(resolve, reject){
        if(!city){
            reject('No location is defined');
        }
        
        request({
        url: url + '&q=' + city + '&units=imperial',
        json: true
        }, function (error, response, body){
            if(error){
                reject('Error in getting weather data');
            } else {
                resolve('Weather is-:'+ body.main.temp + ' in ' + body.name + '!');
            }
        });
    });
}

getWeather('San Fran').then(function(currentWeather){
    console.log(currentWeather);
}, function(error){
    console.log(error);
});
