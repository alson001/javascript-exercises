const reverseString = function(string) {
    len = string.length - 1
    arr = []
    for (let i = len; i >= 0 ; i--) {
        arr[i] = string.charAt(len - i)
    }
    return arr.toString().replaceAll(",", "")
};

// Do not edit below this line
module.exports = reverseString;
