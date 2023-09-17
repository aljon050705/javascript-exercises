const removeFromArray = function(array, ...valuesToRemove) {
    return array.filter(x => !valuesToRemove.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
