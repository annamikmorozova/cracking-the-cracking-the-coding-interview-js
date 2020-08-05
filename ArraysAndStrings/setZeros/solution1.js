// if an element in an MxN matrix is 0, the 
// entire row and column sets to 0

// Time complexity in Big O(NM);
// Space complexity is Big O(NM);
function setZero(matrix) {
    let newSet = new Set();
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (newSet.has(`${i}_${j}`)) {
                continue;
            }
            if (matrix[i][j] == 0) {
                allZero(matrix, i, j, newSet);
            }
        }
    }
    return matrix;
}

// sets the zeros in the matrix for this x and y
function allZero(matrix, x, y, newSet) {
    function convertToZero(x, y) {
        if (matrix[x][y] != 0) {
            newSet.add(`${x}_${y}`);
            matrix[x][y] = 0;
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        convertToZero(x, i);
    }
    for (let j = 0; j < matrix.length; j++) {
        convertToZero(j, y);
    }
}

console.log(setZero([
    [1, 4, 0],
    [3, 2, 8],
    [1, 0, 9]
])); // [ [ 0, 0, 0 ], [ 3, 0, 0 ], [ 0, 0, 0 ] ]
console.log(setZero([
    [3, 4, 2],
    [3, 0, 8],
    [1, 3, 0]
])); //[ [ 3, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ]