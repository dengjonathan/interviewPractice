// O (log n)
const findPivot = arr => {
    if (arr[0] < arr[arr.length -1]) {
        return null;
    }
    return findPivotHelper(arr);
}

const findPivotHelper = (arr, start=0, end=arr.length) => {
    const mid = Math.floor((end - start) / 2) + start;
    console.log(mid);
    if (arr[mid - 1] >= arr[mid] && arr[mid + 1] >= arr[mid]) {
        return mid;
    }
    if (arr[mid] > arr[0]) {
        return findPivotHelper(arr, mid + 1, end);
    }
    return findPivotHelper(arr, start, mid);
}

console.log(findPivot(['x', 'z', ' d', 'e', 'f', 'g']));