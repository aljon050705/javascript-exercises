const palindromes = function (string) {
    noPuncString = string.match(/[a-zA-Z0-9]/g);
    noPuncString = noPuncString.join("").toLowerCase();
    let palindrometest = "";
    for (let i = noPuncString.length-1; i >= 0; i--) {
        palindrometest += noPuncString[i];
    }
    if (palindrometest === noPuncString) return true;
    return false;
};

console.log(palindromes("madama"))

// Do not edit below this line
module.exports = palindromes;
