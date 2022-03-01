/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const step = [1, 2];
  if (n === 1) return 1;
  if (n === 2) return 2;
  let count = 0;

  for (let i = 2; i < n; i++) {
    step[i] = step[i - 2] + step[i - 1];
  }
  return step[n - 1];
};
