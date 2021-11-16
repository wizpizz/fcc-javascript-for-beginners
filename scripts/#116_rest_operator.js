const sum = (function () {
    return function sum(...args) { // turns arguments into an array
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3, 4));

// copilot is very smart and can understand the rest operator
// and it will turn the arguments into an array
// and it will return the sum of all the elements in the array
// and it will return 0 if there are no elements in the array