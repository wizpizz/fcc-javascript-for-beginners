var myArray = [];
var i = 10;

while (i < 5) {
    myArray.push(i);
    i++;
}

do {
    myArray.push(i);
    i++;
} while (i < 5);

console.log(i, myArray)