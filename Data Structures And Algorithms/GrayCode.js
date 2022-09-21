/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  for (let i = 0; i < n * n; i++) {
    console.log(dec2bin(i));
  }
};

function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}

console.log(grayCode(2));
