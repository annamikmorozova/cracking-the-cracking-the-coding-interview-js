// if an element in an MxN matrix is 0, set its entire row and column to 0
// assume all rows are of same length & all columns are of same length
// assume all elements are non-null integers
// sidenote on datetype: in Java, int is a primitive type and so a new int[] will throw an error if any of its value is null; while Integer is an object wrapper of int and so new Integer[] can include null. so line 13 wouldn't throw an error if implemented in another language (at least Java that I know of), which doesn't matter in Javascript anyway

// O(MxN) time, O(1) space
function zeroMatrix(matrix) {
  const m = matrix.length
  const n = matrix[0].length
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][j] = null
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === null) {
        zeroCross(matrix, m, n, i, j)
      }
    }
  }
  return matrix
}

// O(M+N) time, O(1) space
function zeroCross(matrix, m, n, r, c) {
  for (let i = 0; i < m; i++) {
    matrix[i][c] = 0
  }
  for (let j = 0; j < n; j++) {
    matrix[r][j] = 0
  }
}

console.log(zeroMatrix([
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 0, 1, 1]
]));
// [ [ 1, 0, 1, 1 ], [ 1, 0, 1, 1 ], [ 0, 0, 0, 0 ] ]
console.log(zeroMatrix([
    [0, 1, 1],
    [1, 0, 1],
    [0, 1, 1],
    [1, 1, 1]
]));
//[ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 1 ], [ 0, 0, 1 ] ]
