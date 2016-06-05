function isPalindrome(s){
    if(s.length === 1 ){
        return true;
    }
    
    var index1 = 0;
    var index2 = s.length - 1;
    
    while(index1 < index2){
        if(s[index1] !== s[index2]){
            return false;
        }
        index1++;
        index2--;
    }
    
    return true;
}

console.log(isPalindrome('aba'));
console.log(isPalindrome('abba'));
console.log(isPalindrome('abcd'));
