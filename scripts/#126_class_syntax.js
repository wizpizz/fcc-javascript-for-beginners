// var SpaceShuttle = function (targetPlanet) { // This is a constructor function / class
//     this.targetPlanet = targetPlanet;
// }
// var zeus = new SpaceShuttle('Jupiter');
//
// console.log(zeus.targetPlanet)

class SpaceShuttle {
    constructor(targetPlanet) { // constructor keyword is used to define the class
        this.targetPlanet = targetPlanet; // this is a class property
    };
}
var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet)

function makeClass() {
    class Vegetable {
        constructor(name) {
            this.name = name;
        }
    }
    return Vegetable
}
const Vegetable = makeClass(); //
const carrot = new Vegetable('carrot'); // new keyword is required, because it's a constructor function
console.log(carrot.name); // Should display 'carrot'