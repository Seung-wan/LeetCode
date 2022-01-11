var isPalindrome = function (x) {
  const str = x + '';
  const length = str.length;
  let left, right;
  if (length > 2) {
    left = str.slice(0, Math.floor(length / 2));
    right = str.slice(Math.floor(length / 2) + 1);
  } else {
    left = str.slice(0, 1);
    right = str.slice(1);
  }
  const rightArr = right.split('').reverse().join('');
  console.log(rightArr);
  if (left === right) return true;
  return false;
};
