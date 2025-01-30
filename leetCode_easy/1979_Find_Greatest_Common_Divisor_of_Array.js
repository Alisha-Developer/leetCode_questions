var findGCD = function(nums) {
    nums.sort((a,b)=>a-b);
    
    n= nums.length-1;
    // console.log(nums[0]);
    // for(i=1;i<=nums[0];i++){
    //     console.log(i);
    //     if((nums[0]%i==0)&&(nums[n]%i==0)){
    //         gcd = i;
    //     }
    // }
    // let a = nums[0];
    // let b = nums[n];
    // while(a!=b){
    //     if(a>b){
    //         a = a-b;
    //     }
    //     else{
    //         b = b-a;
    //         }
    // }
    // return a||1;


    //100%beats || optimize solution
    let min = Math.min(...nums);
    let max = Math.max(...nums);
    const gcd=(a,b)=> {
        if(a==0) return b
        if(b==0|| a==b) return a;
        else if(a>b) return gcd(a-b,b);
        else return gcd(a,b-a);
    }
    return gcd(min,max);
};

console.log(findGCD([98,56]));