let sumAll = function(start,end) {
    if (!Number.isInteger(start) || !Number.isInteger(end)) return 'ERROR';
    if (start > end) {
        const temp = start;
        start = end;
        end = temp;
      }
    if (start < 0 || end < 0) return 'ERROR';
    let sum = 0;
    for (i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

//sumAll(10,1);

// Do not edit below this line
module.exports = sumAll;
