const binarySearch = (array, target, start=0) => {
  if (array.length === 0) {
    return -1;
  }
  const pivotIndex = Math.floor(array.length / 2);
  const pivot = array[pivotIndex];
  if (target === pivot) {
    return start + pivotIndex;
  }
  if (target < pivot) {
    return binarySearch(array.slice(0, pivotIndex), target, start);
  }
  if (target > pivot) {
    return binarySearch(array.slice(pivotIndex + 1), target, start + pivotIndex + 1);
  }
}

console.log(binarySearch([ 11, 12, 13, 14, 15 ], 16))
