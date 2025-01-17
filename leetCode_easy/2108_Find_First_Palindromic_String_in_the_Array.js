var firstPalindrome = function(words) {
    for(let i=0;i<words.length;i++){
        let str=words[i];
        let bool = true;
        let left=0,right=str.length-1;
        while(left<right){
            if(str[left]!==str[right]){
                bool=false;
                break;
            }
            left++;
            right--;
            bool = true;
        }
        if(bool){
            return str;
        }
    }
    return '';
    
};

console.log(firstPalindrome(["abc","car","ada","racecar","cool"]));