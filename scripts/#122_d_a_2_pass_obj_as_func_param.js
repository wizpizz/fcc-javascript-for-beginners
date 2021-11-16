const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function () {

  return function half({max, min}) { // Only passes in max and min, not stats
    return (max + min) / 2.0; // Sums up max and min and divides by 2 which is the average
  };
    }

)();
console.log(stats);
console.log(half(stats));