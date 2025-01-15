const lengthOflastWord =(str)=>{
    str = str.trim();
    let arr = str.split(" ");
    let lastWord = arr.at(-1);
    console.log(lastWord.length);
}

lengthOflastWord("  Geeks for Geeks   ");