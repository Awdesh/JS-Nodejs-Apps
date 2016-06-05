function ifDuplicateExists(arr){
    var ht = new Object();
    var len = arr.length;
    
    var index = 0;
    while(index < len){
        console.log(arr[index]);
        console.log(ht[arr[index]]);
        if(ht[arr[index]]){
            return true;
        } else {
            ht[index] = arr[index];
        }
        index++;
    }
    return false;
}

var arr = [4,1,3,2];
console.log(ifDuplicateExists(arr));