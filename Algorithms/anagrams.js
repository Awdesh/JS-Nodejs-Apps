function areAnagrams(s1, s2){
    
    if(s1.length != s2.length){
        return false;
    }
    
    var len = s1.length;
    console.log(len);
    
    var ht = new Object();
    var index = 0;
    while(index < len){
        if(!ht[s1[index]])
            ht[s1[index]] = 1;
        else
            ht[s1[index]]+= 1;
        index++;
    }
    
    var len2 = s2.length;
    var index2 = 0;
    while(index2 < len2){
        if(ht[s2[index2]]){
            ht[s2[index2]] -= 1;
        } else {
            return false;
        }
        index2++;
    }
    
    return true;
}

var isAnagram = areAnagrams('abcd', 'dacba');
console.log(isAnagram);