var restoreString = function(s, indices) {
    let char =[];
    for(let i=0;i<s.length;i++){
        char[indices[i]]= s[i];
    }
    return char.join("");
};
console.log(restoreString("codeleet",[4,5,6,7,0,2,1,3]));