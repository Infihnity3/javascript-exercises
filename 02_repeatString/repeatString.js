const repeatString = function(string, num) {
    let rep = "";
    for (let i = 0; i < num; i++){
        rep += string;
        //return rep.concat(string); 
    }
    return rep;
};

// Do not edit below this line
module.exports = repeatString;
