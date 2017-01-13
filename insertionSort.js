// space O(1)
// time O(n log n) for each item in array, have to compare them to a subset of other elements
const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i];
    let j = i - 1;
    while (j >= 0 && temp < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
};

const arr = [155,3,64,7];

insertionSort(arr);

console.log(arr);
