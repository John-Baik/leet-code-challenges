/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const array = [];
    const map = {
      '(': ')',
      '[': ']',
      '{': '}'
    };
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            array.push(s[i]);
        } else {
            if (s[i] === map[array[array.length - 1]]) {
                array.pop();
            } else {
                return false;
            }
            
        }
    }
    return array.length === 0;
};