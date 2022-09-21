/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  //not in ordered, not using bin search

  let output = [];
  //   console.log(l1, l2);

  for (let i = 0; i < nums1.length - 1; i++) {
    const e1 = nums1[i];
    const e2 = nums1[i + 1];
    let u = 1;
    //   console.log(nums2.indexOf(element));
    for (let j = 0; j < nums2.length - 1; j++) {
      const e3 = nums2[j];
      const e4 = nums2[j + 1];
      if (e1 == e3 && e2 == e4) {
        let ex = nums1[i + 1 + u];
        let ey = nums2[j + 1 + u];
        let currentResult = [e3, e4];
        while (
          ex == ey &&
          i + 1 + u <= nums1.length - 1 &&
          j + 1 + u <= nums2.length - 1
        ) {
          currentResult.push(ey);
          u++;
          ex = nums1[i + 1 + u];
          ey = nums2[j + 1 + u];
        }
        output.push(currentResult);
      }
    }
  }
  // console.log(output);
  let result = 0;
  for (let i = 0; i < output.length - 1; i++) {
    const l3 = output[i].length;
    if (result >= l3) {
    } else result = l3;
  }

  return result;

  //use arr with longer leng, if equal use nums1
  //for loop
  //with nums1[i] check if nums1[i+1] equal nums2[nums1[i] + 1]
};

// console.log(findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]));
console.log(findLength([0, 0, 0, 0, 0], [0, 0, 0, 0, 0]));
