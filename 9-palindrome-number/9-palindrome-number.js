/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let string = x.toString();  
    let split = string.split('');
    let reverse = split.reverse();
    let join = reverse.join('');
    let number = Number(join);
    if (number === x) {
        return true;
    } else {
        return false;
    }
};