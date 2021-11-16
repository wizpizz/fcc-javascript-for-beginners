const increment = (function ()
{
    return function increment(number, value = 1) {
        return number + value;
    };
})();
console.log(increment(5, 2));
console.log(increment(5));

// const inc = (function(number, value = 1)
// {
//     return number + value;
// });
// console.log(inc(5, 2));
// console.log(inc(5));