//49. Group Anagrams

var groupAnagrams = function(strs) {
    let map = new Map();
    for(let i = 0; i < strs.length; i++)
    {
        let sorted = strs[i].split("").sort().join('');
        if(!map.has(sorted)){
            map.set(sorted,[]);
        }
        map.get(sorted).push(strs[i]);
    }
    return [...map.values()];        
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));