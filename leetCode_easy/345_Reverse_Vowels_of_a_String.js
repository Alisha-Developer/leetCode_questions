var reverseVowels = (s)=> {
    let a = "aeiouAEIOU";
    const vowchar = (c) => a.includes(c);
    let ind = [];
    let chars = s.split("");
    let j=0;
    for(let i=0;i<s.length;i++){
        if(vowchar(s[i])){
            ind[j]=i;
            j++;
        }
    }
    console.log(ind);
    let left =0,right = ind.length-1;
    console.log(s[ind[left]]);
    console.log(s[ind[right]]);
    while(left<right){
        let t = chars[ind[left]];
       chars[ind[left]]= chars[ind[right]];
       chars[ind[right]]= t;
        left++;
        right--;
        
    }

    return chars.join("");

};
console.log(reverseVowels("hello"));