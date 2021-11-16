const bicycle = {
  gear: 2,
  setGear(newGear) { // setGear doesn't require the keyword 'function', because it's a method of the object
    this.gear = newGear;
  }
};

bicycle.setGear(3);
console.log(bicycle.gear);