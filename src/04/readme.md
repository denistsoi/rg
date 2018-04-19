// work on top of objects/jquery

- prototypes
- classes
- recursion 

5. Make this syntax possible: var a = (5).plus(3).minus(6); //2

Number.prototype.plus = function (n) {
    return this + n;
};
Number.prototype.minus = function (n) {
    return this - n;
};
var a = (5).plus(3).minus(6);
console.log(a);//2
