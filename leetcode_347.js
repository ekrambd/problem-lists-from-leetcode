//347. Top K Frequent Elements

var topKFrequent = function(nums, k) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++)
    {
        let count = map.get(nums[i]);
        if(count == null){
            map.set(nums[i],1);
        }else{
            map.set(nums[i],count+1);
        }
    }
    let sorted = [...map.entries()].sort((a,b)=>b[1]-a[1]);
    let result = [];
    for(let i = 0; i < k; i++)
    {
        result.push(sorted[i][0]);
    }
    return result;           
};

console.log(topKFrequent([1,1,1,2,2,3], 2)); //[1,2]
console.log(topKFrequent([1], 1)); // [1]