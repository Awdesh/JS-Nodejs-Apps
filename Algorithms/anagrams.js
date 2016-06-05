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
    
    console.log('length of hash table before is-: ', Object.keys(ht).length);
    
    var len2 = s2.length;
    var index2 = 0;
    while(index2 < len2){
        if(ht[s2[index2]]){
            ht[s2[index2]] -= 1;
            if(ht[s2[index2]] === 0){
                delete ht[[s2[index2]]];
            }

        } else {
            return false;
        }
        index2++;
    }
    
    console.log('length of hash table after is-: ', Object.keys(ht).length);
    
    if(Object.keys(ht).length == 0)
        return true;
    else
        return false;
}

var isAnagram = areAnagrams('abcd', 'dacb');
console.log(isAnagram);