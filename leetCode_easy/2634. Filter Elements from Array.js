var filter = function(arr, fn) {
    const n = arr.length;
    let newarr = [];
    let j=0;
    for(let i=0;i<n;i++){
        if(fn(arr[i],i)){
            newarr[j]=arr[i];
            j+=1;
        }
    }
    return newarr;
};
