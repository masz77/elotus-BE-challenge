/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  let output = ["00"];
  while (output.length <= 4) {
    let lastOutput = output[output.length - 1].toString();
    for (let i = 1; i < n * n; i++) {
      // console.log(dec2bin(i));
      let bin = dec2bin(i);
      if (bin.length == 1) {
        bin = "0" + bin;
        //   console.log(bin);
      }
      const e1 = lastOutput[0];
      const e2 = lastOutput[1];
      const e3 = bin[0];
      const e4 = bin[1];
      if ((e1 == e3 && e2 != e4) || (e1 != e3 && e2 == e4)) {
        // console.log(bin);
        if (output.indexOf(bin) == -1) {
          output.push(bin);
        }
      }
    }
  }
  return output;
};

function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}

console.log(grayCode(2));
