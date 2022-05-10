/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = '';
    let maxPrefixLength = Math.min(...strs.map(word => word.length));
    for (let i = 0; i < maxPrefixLength; i++) {
        let char = strs[0][i];
        if (strs.every(current => current[i] === char)) {
            prefix += char;
        } else {
            break;
        }
    }
    return prefix;
};



