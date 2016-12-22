// can rotate matrix any positive or negative integer number of times
const rotateMatrix = (matrix, direction = 1) => {
  let result = matrix;
  if (direction > 0) {
    for (let i = 0; i < direction; i++) {
      result = clockwise(result);
    }
    return clockWise(matrix);
  }
  if (direction < 0) {
    for (let i = 0; i > direction; i--) {
      result = counterClockwise(result);
    }
  }
  return result;
}

const clockwise = matrix => {
  const result = Array.apply(null, Array(matrix[0].length)).map(_ => []);
  return matrix.reduceRight((result, row) =>
    result.map((rotatedRow, ind) => rotatedRow.concat([row[ind]])), result)
}

const counterClockwise = matrix => {
  const result = Array.apply(null, Array(matrix[0].length)).map(_ => []);
  return matrix.reduce((result, row) =>
    result.map((rotatedRow, ind) => rotatedRow.concat([row.reverse()[ind]])), result)
}

console.log(rotateMatrix([
  [1, 2, 3],
  [3, 5, 6]
], -2));
