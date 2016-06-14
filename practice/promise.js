function promiseExample(bool){
        return new Promise(function(resolve, reject){
        if(bool){
            resolve('returning true');
        }
     else {
            reject('returning false');
     }
    });
}

promiseExample().then(function(val){
    console.log(val);
}).catch(function(e){
    console.log(e);
});