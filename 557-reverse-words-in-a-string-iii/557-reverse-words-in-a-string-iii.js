/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const newArray = s.split(' ');
    let finalString = '';
    for (let i = 0; i < newArray.length; i++) {
        let index = newArray[i].split('').reverse().join('');
        finalString = `${finalString} ${index}`;
    }
    return finalString.trim();
};