/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = '';
    const maxPrefixLength = Math.min(...strs.map(word => word.length));
    for (let i = 0; i < maxPrefixLength; i++) {
        if (strs.every(word => word[i] === strs[0][i])) {
            prefix += strs[0][i];
        } else {
            break;
        }
    }
    return prefix;
};



