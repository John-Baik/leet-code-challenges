/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let result = '';
    let word = '';
    
    for (let i = 0; i < s.length; i++) {
        let val = s[i];
        if (val !== ' ') {
            word = val + word;
        } else {
            result += word + val;
            word = '';
        }
    }
    result += word;
    return result;
};