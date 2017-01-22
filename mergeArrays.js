var merge = function (nums1, nums2) {
  for (let i = 0; i < nums1.length; i++) {
    if (nums2[0] < nums1[i]) {
      nums1.splice(i, 0, nums2.shift());
    }
  }
  if (nums2.length) {
    nums2.forEach(num => nums1.push(num));
  }
};
const first = [0]
merge(first, [1]);
console.log(first)