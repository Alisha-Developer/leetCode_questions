var arrayRankTransform = function(arr) {
    // let newarr = [...new Set(arr)];
    // newarr.sort((a,b)=>a-b);
    // let rankarr = [];
    
    // for (let i = 0; i < arr.length; i++) {
    //     for(let j=0;j<newarr.length;j++){
    //         if(arr[i]===newarr[j]){
    //             rankarr.push(j+1);
    //             break;
    //             }
    //     }

    // }

    // return rankarr;

     // Step 1: Remove duplicates and sort
    let sortedarr = [...new Set(arr)].sort((a,b)=>a-b);

     // Step 2: Assign ranks using a Map
    let rankmap = new Map();
    sortedarr.forEach((num,index)=>rankmap.set(num,index+1));

    // Step 3: Replace original values with their rank
    return arr.map((num)=>rankmap.get(num));
};
console.log(arrayRankTransform([37,12,28,9,100,56,80,5,12]));