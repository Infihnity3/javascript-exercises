const reverseString = function(str) {
    let splitString = str.split("");
    let reverseSplit = splitString.reverse();
    let concatReverse = reverseSplit.join("");
    return concatReverse;
    //console.log(concatReverse)
};


// Do not edit below this line
module.exports = reverseString;
