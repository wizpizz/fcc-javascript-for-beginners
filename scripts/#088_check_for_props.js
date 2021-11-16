var myObj = {
    "gift": "pony",
    "pet": "kitten",
    "bed": "sleigh",
};

function checkObj (checkprop) {
    if (myObj.hasOwnProperty(checkprop)) {
        return myObj[checkprop];
    }
    else {
        return "Not Found";
    }
}

console.log(checkObj('hello'))