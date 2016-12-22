function mergeSort(arr){
  if (!arr.length) {
    return [];
  }
  if (arr.length === 1) {
    return arr;
  }
  const half = Math.floor(arr.length / 2);
  const arr1 = arr.slice(0, half);
  const arr2 = arr.slice(half);
  return merge(mergeSort(arr1), mergeSort(arr2));
}

const merge = (arr1, arr2) => {
  let ind1 = 0;
  let ind2 = 0;
  let sorted = [];
  while (ind1 < arr1.length || ind2 < arr2.length) {
    if (ind1 === arr1.length) {
      sorted = sorted.concat(arr2.slice(ind2))
      break;
    }
    if (ind2 === arr2.length) {
      sorted = sorted.concat(arr1.slice(ind1))
      break;
    }
    if (arr1[ind1] <= arr2[ind2]) {
      sorted.push(arr1[ind1]);
      ind1++;
    } else {
      sorted.push(arr2[ind2]);
      ind2++;
    }
  }
  return sorted;
}

console.log(mergeSort([2,1,4,5,6,3]));