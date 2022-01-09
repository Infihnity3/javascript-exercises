const removeFromArray = function(arr, num) {
    for (i = 0; i < arr.length; i++){
        if (arr[i] === num){
            //delete arr[i];
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
};

//console.log(removeFromArray([1, 2, 3, 5, 5], 5, 3));
// Do not edit below this line
module.exports = removeFromArray;
