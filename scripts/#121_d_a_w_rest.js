const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFistTwo(list) {

    const [, , ...arr] = list; // Do nothing with the first two elements and return the rest of the array.

    return arr;
}
const arr = removeFistTwo(source);
console.log(arr);
console.log(source);
