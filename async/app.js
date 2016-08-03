var weather = require('./weather');
var location = require('./location');

var argv = require('yargs')
        .option('location', {
            demand: false,
            alias: 'l',
            description: 'Your location here',
            type: 'string'
        })
        .help('help')
        .argv;
        
if(typeof argv.l === 'string' && argv.l.length > 0){
    weather(argv.l).then(function(currentWeather){
        console.log(currentWeather);
    }).catch(function(error){
        console.log(error);
    });
}else{
    location().then(function(currentLocation){
        return weather(currentLocation.city);
    }).then(function(currentWeather){
        console.log(currentWeather);
    }).catch(function(error){
        console.log(error);
    });
}
        
// if(typeof argv.l === 'string' && argv.l.length > 0){
//     console.log('has location');
//         weather(argv.l, function(currentWeather){
//             console.log(currentWeather);
//         });
// } else{
//     location(function(currentLocation){
//     if(currentLocation){
//          weather(currentLocation.city, function(currentWeather){
//          console.log(currentWeather);
//         });
//     } else {
//         console.log('Unable to get location');
//     }
//  });
// }
