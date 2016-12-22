'use strict';

let arr = [{ "value": 10 }, { "value": 5, "order": 1 }, { 'value': 2 }, { "value": 5, "order": 2 }, { "value": 1 }];

function insertionSort(arr) {
  let array = arr.slice();
  // go from 2nd element to end of list
  for (let i = 1; i < array.length; i++) {
    // extract element at index i
    console.log(i);
    let val = array.splice(i, 1)[0];
    // go from right to left down the list
    for (let j = i - 1; j >= 0; j--) {
      if (array[j].value > val.value && j === 0) {
        array.unshift(val);
      } else if (array[j].value < val.value) {
        array.splice(j + 1, 0, val);
        break;
      } else if (array[j].value === val.value) {
        if (array[j].order <= val.order) {
          array.splice(j + 1, 0, val);
          break;
        } else {
          array.splice(j, 0, val);
        }
        break;
        console.log(i, j, array);
      }
    }
    console.log(array);
  }
  return array;
};


console.log('answer', insertionSort(arr));
