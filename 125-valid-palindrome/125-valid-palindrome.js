/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let lowerCase = s.toLowerCase();
    let array = lowerCase.split('');
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if ((lowerCase[i] !== '' && lowerCase.charCodeAt(i) >= 97 && lowerCase.charCodeAt(i) <= 122) || (lowerCase.charCodeAt(i) >= 48 && lowerCase.charCodeAt(i) <= 57)) {
            newArray.push(array[i]);
        }
    }
    let string1 = newArray.join('');
    let reverseArray = newArray.reverse();
    let reverseString = reverseArray.join('');
    if (reverseString === string1) {
        return true;
    } else {
    return false;
    }
};
