class Book {
    constructor(author) {
        this._author = author;
    }
    // getter
    get writer() {
        return this._author;
    }
    // setter
    set writer(updatedAutoher) {
        this._author = updatedAutoher;
    }
}

function makeClass() {
    class Thermostat {
        constructor(temp) {
            this._temp = 5/9 * (temp - 32);
        }
        get temperature() {
            return this._temp;
        }
        set temperature(updatedTemp) {
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}

const Thermostat = makeClass(); // function expression
const thermos = new Thermostat(76); // invoking the function
let temp = thermos.temperature; // getter, no parentheses which means that it is a getter
thermos.temperature = 26; // setter
temp = thermos.temperature; // assigning the new value to temp
console.log(temp);