//242. Valid Anagram

var isAnagram = function(s, t) {
    let map = new Map();
    if(s.length != t.length) return false;
    for(let i = 0; i < s.length; i++)
    {
        let count = map.get(s[i]);
        map.set(s[i],count+1);
    }
    for(let i = 0; i < s.length; i++)
    {
        let count = map.get(t[i]);
        if(count == 0) return false;
        map.set(t[i],count-1);
    }
    return true;        
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));