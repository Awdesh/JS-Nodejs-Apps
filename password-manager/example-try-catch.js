function doWork(){
    throw new Error('Unable to do work');
}

try{
    doWork();
} catch(e){
    console.log("inside catch block..")
    // catch prints the error message that 'try' throws.
    console.log(e.message);
} finally {
    console.log('inside finally block');
}