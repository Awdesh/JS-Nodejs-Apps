console.log('Async demo');

function printInTwoSeconds(message){
    setTimeout(function(){
        console.log(message)
    }, 2000);
}

printInTwoSeconds('learning node async');

