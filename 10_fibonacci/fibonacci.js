const fibonacci = function(n) {
    if (n < 0 || +n == NaN) return "OOPS"
    if (n < 2) {
        return +n;
    }
    return (fibonacci(n-1) + fibonacci(n-2))
};

// Do not edit below this line
module.exports = fibonacci;
