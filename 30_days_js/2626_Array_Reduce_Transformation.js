var reduce = function(nums, fn, init) {
    const n = nums.length;
    if(n==0){
        return init;
    }
    let newarr=[];
    let val = fn(init,nums[0]);
    for(let i=1;i<n;i++){
        val = fn(val,nums[i]);
    }
    return val;
};

let nums = [1,2,3,4]
let fn = function sum(accum, curr) { return accum + curr; }
let init = 0

console.log(reduce(nums,fn,init));