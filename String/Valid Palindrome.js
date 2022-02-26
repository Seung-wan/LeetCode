/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const arr = [];
  let sentence = '';
  let reverseSentence = '';
  s = s.toLowerCase();

  for (let item of s) {
    if ((item >= 'a' && item <= 'z') || (item >= '0' && item <= '9')) {
      arr.push(item);
    }
  }
  sentence = arr.join('');
  reverseSentence = arr.reverse().join('');

  if (sentence === reverseSentence) return true;
  else return false;
};
