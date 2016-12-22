// set changed flag false

// iterate through all indexes in the array:
// if value at index gt value at index + 1:
// switch them
// set flag true

const bubbleSort = array => {
  let changed = false;
  do {
    changed = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        changed = true;
      }
    }
  }
  while (changed);
  return array;
};

console.log(bubbleSort([2, 1, 3, 4]))