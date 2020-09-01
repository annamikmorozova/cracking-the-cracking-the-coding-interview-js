// rotate NxN matrix 90 degrees in place
// assume direction input can be either 'right' or 'left'
// O(N**2) time, O(1) space

function rotateMatrix(matrix, direction) {
  const n = matrix.length
  let depth = n / 2,
    row = 0,
    start = 0,
    end = n - 1

  while (row < depth) {
    for (let col = start; col < end; col++) {
      matrix = rotateFour(matrix, n, row, col, direction)
    }
    row++
    start++
    end--
  }

  return matrix
}

function rotateFour(matrix, n, row, col, direction) {
  let tmp = matrix[row][col]

  if (direction == 'right') {
    // rotate clockwise
    for (let i = 0; i < 3; i++) {
      const prevRow = n - 1 - col
      const prevCol = row
      matrix[row][col] = matrix[prevRow][prevCol]
      row = prevRow
      col = prevCol
    }
  } else (direction == 'left') {
    // rotate counter-clockwise
    for (let i = 0; i < 3; i++) {
      const nextRow = col
      const nextCol = n - 1 - row
      matrix[row][col] = matrix[nextRow][nextCol]
      row = nextRow
      col = nextCol
    }
  }

  matrix[row][col] = tmp
  return matrix
}

console.log(rotateMatrix([
  [1,2,3],
  [4,5,6],
  [7,8,9]]))
// clockwise:
// [ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ]
// counter-clockwise:
// [ [ 3, 6, 9 ], [ 2, 5, 8 ], [ 1, 4, 7 ] ]

console.log(rotateMatrix([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11,12,13,14,15],
  [16,17,18,19,20],
  [21,22,23,24,25]]))
// clockwise:
// [
//   [ 21, 16, 11, 6, 1 ],
//   [ 22, 17, 12, 7, 2 ],
//   [ 23, 18, 13, 8, 3 ],
//   [ 24, 19, 14, 9, 4 ],
//   [ 25, 20, 15, 10, 5 ]
// ]
// counter-clockwise:
// [
//   [ 5, 10, 15, 20, 25 ],
//   [ 4, 9, 14, 19, 24 ],
//   [ 3, 8, 13, 18, 23 ],
//   [ 2, 7, 12, 17, 22 ],
//   [ 1, 6, 11, 16, 21 ]
// ]

  console.log(rotateMatrix([
    [1,2,7,4],
    [5,2,7,8],
    [9,1,4,5],
    [9,4,6,1]]))
// clockwise:
// [ [ 9, 9, 5, 1 ], [ 4, 1, 2, 2 ], [ 6, 4, 7, 7 ], [ 1, 5, 8, 4 ] ]
// counter-clockwise:
// [ [ 4, 8, 5, 1 ], [ 7, 7, 4, 6 ], [ 2, 2, 1, 4 ], [ 1, 5, 9, 9 ] ]
