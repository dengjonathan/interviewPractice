const spiralTraversal = matrix => {
  if (!matrix.length || !matrix[0].length) {
    return [];
  }
  if (matrix.length === 1) {
    return matrix[0];
  }
  if (matrix[0].length === 1) {
    return matrix.map(row => row[0]);
  }
  return convertOuter(matrix)
    .concat(spiralTraversal(chopOuter(matrix)));
}

const convertOuter = matrix => (
  matrix[0] // top row
    .concat(matrix.map(row => row[row.length -1]).slice(1)) // right side
    .concat(matrix[matrix.length -1].reverse().slice(1)) // bottom row
    .concat(matrix.map(row => row[0]).slice(1).reverse().slice(1)) //left side
);

const chopOuter = matrix => {
  return matrix
    .slice(1, matrix.length - 1)
    .map(row => row.slice(1, row.length - 1));
};

// var a = convertOuter([ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 10 ], [ 11, 12, 13, 14, 15 ], [ 16, 17, 18, 19, 20 ], [ 21, 22, 23, 24, 25 ] ]);
// console.log(a);

// var b = chopOuter([ [ 1 ], [ 2 ], [ 3 ], [ 4 ] ]);

// console.log(b);
//
// FIXME deal with the edgecase of one row or one column arrays

var c = spiralTraversal([[ 1], [2], [3], [4]]);
console.log(c);
//for loop solution:
// //const limits = {
//     u: 0,
//     b: matrix.length,
//     l: 0,
//     r: matrix[0].length
//   }
//   while(limits.u !== limts.b && limits.l !== limits.r) {
//     //print top
//     //print right
//     //print bottom
//     //print lower
//   }
