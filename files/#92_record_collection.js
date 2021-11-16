var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": [ ]
    },
    "5439": {
        "album": "ABBA Gold"
    }
};

// Keep a acopy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];
    }
    else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || []; // Create property if it doesn't exist
        collection[id][prop].push(value);
    }
    else {
        collection[id][prop] = value
    }

    return collection;
}
updateRecords("2468", "tracks", "test");
console.log(updateRecords("5439", "artist", "ABBA"));