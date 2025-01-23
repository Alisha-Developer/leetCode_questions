var createCounter = function(n) {
    
    return function() {
        a=n;
        n+=1;
        return a;

    };
};

let n=10;
const counter = createCounter(n);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
