var plusOne = function(digits) {
    let number = BigInt(digits.join(""))+1n;
    number = number.toString();
    number = number.split("")
    for(let i=0;i<number.length;i++){
        number[i]= parseInt(number[i]);
    }
    return number;
    // number = 0;
    // for(let i=0;i<digits.length;i++){
    //     number= number*10+digits[i];
    // }
    // number+=1;
    // number = number.toString();
    // number = number.split("");
    // for(let i=0;i<number.length;i++){
    //     number[i]= parseInt(number[i]);
    // }
    // return number;
};
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));