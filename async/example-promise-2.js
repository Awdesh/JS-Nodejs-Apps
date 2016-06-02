function getLocation() {
    return new Promise(function(resolve, reject){
        resolve('Seattle');
    });
}

function getWeather(location){
    return new Promise(function(resolve, reject){
        if(typeof location === 'string' && location != null){
            resolve('Its 65 in ' + location);
        }
        else{
            reject('Error occurred in getting weather');
        }
    });
}

getLocation().then(function(location){
    return getWeather(location);
}).then(function(currentWeather){
    console.log(currentWeather);
}).catch(function(err){ // catches error happens in above 2 promises.
    console.log(err);
});

//promise can only be fired once. only resolve or reject.