//14. Longest Common Prefix

var longestCommonPrefix = function(strs) {
    if(!strs.length) return "";
    strs.sort();
    let first = strs[0];
    let last = strs[strs.length - 1];
    let i = 0;
    while(i < first.length && first[i] == last[i])
    {
        i++;
    }
    let result = first.substring(0,i);
    return result;    
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));