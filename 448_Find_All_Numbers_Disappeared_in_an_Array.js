var findDisappearedNumbers = function(nums) {
    let numSet = new Set(nums); 
    let arr=[];
    for(let i=0;i<nums.length;i++){
        if(!numSet.has(i+1)){
            arr.push(i+1);
        }
    }
    return arr;
};
