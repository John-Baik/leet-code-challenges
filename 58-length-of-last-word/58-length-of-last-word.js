/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let splitArray = s.split(' ');
    let newArray = splitArray.filter(word => word);
    let lastIndex = newArray.length - 1;
    return newArray[lastIndex].length;
};