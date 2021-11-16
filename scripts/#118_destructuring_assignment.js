var voxel = {x: 3.6, y: 7.4, z: 6.54};

var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54

const {x: a, y: b, z: c} = voxel; // a = 3.6, b = 7.4, c = 6.54
// gets the fields of voxel and assign them to the variables a, b, c


const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
    "use strict";

    const {tomorrow: tempOfTomorrow} = avgTemperatures; // gets the field tomorrow and assign it to the variable tempOfTomorrow

    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79