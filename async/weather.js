var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?appid=eb1d1a093ab72910d3b32544dbefcfcc';

module.exports = function(city){
    encodeURIComponent(city);
    
    return new Promise(function(resolve, reject){
        if(!city){
            return reject('No location is defined');
        }
        
        request({
        url: url + '&q=' + city + '&units=imperial',
        json: true
        }, function (error, response, body){
            if(error){
                reject('Error in getting weather data');
            } else {
                // console.log(JSON.stringify(body, null, 4));
                resolve('Weather is-:'+ body.main.temp + ' in ' + body.name + '!');
            }
        });
    }); 
};