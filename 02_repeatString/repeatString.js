const repeatString = function(string, repeatAmount) {
    if (repeatAmount < 0) return 'ERROR'; 
    let rebuiltString = "";
    for (let i=0; i < repeatAmount; i++) {
        rebuiltString += string;
    }
    return rebuiltString;
};

// Do not edit below this line
module.exports = repeatString;
