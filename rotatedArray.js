function rotatedArraySearch (rotated, target, left=0, right=rotated.length-1) {
  const mid = Math.floor((right - left)/2 + left);
  if (rotated [left] === target) {
    return left;
  }
  if (rotated[mid] === target) {
    return mid;
  }
  if (rotated[right] === target) {
    return right;
  }
  if (rotated[left] < rotated[mid]) {
    // left side doesn't contain pivot
    if (rotated[left] < target && target < rotated[mid]) {
      return rotatedArraySearch(rotated, target, left, mid);
    } else {
      return rotatedArraySearch(rotated, target, mid + 1, right);
    }
  } else {
    // left side contains the pivot
    if (rotated[mid] < target && target < rotated[right]) {
      return rotatedArraySearch(rotated, target, mid + 1, right);
    } else {
      return rotatedArraySearch(rotated, target, left, mid);
    }
  }
} 

console.log(rotatedArraySearch([3,4,5,6,7,1,2], 0))
