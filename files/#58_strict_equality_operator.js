function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testStrict('7'));

/*
3 == 3
3 === '3'
 */