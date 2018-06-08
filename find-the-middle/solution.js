// version that's easier to read
var gimme = function (inputArray) {
    const sortedArray = inputArray.slice().sort(function(a, b){return a - b});
    const middleValue = sortedArray[1];
    return inputArray.indexOf(middleValue);
};


// version that's shorter
var gimme = function (inputArray) {
    const middleValue = inputArray.slice().sort(function(a, b){return a - b})[1];
    return inputArray.indexOf(middleValue);
};