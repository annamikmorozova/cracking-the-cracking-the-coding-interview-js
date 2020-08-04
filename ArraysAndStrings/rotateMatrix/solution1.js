// rotate the matrix by 90 degrees to the right
// the size of the matrix is NxN
// return the flipped matrix if it is a matrix
// return "Can't be flipped" if it can't be flipped

// Time complexity is Big O(N^2);
// Space complexity is Big O(1);
function rotateMatrix(matrix) {
    if (matrix.length == 0 || matrix.length != matrix[0].length) {
      return "Can't be flipped";
    }
    let n = matrix.length;
    for (let layer = 0; layer < n / 2; layer++) {
      let first = layer; 
      let last = n - 1 - layer; 
      for (let i = first; i < last; i++) {
        let offset = i - first; 
        let top = matrix[first][i]; //save top
  
        // left -> top
        matrix[first][i] = matrix[last-offset][first];
  
        // bottom -> left
        matrix[last-offset][first] = matrix[last][last-offset];
  
        // right -> bottom
        matrix[last][last-offset] = matrix[i][last];
  
        //top -> right
        matrix[i][last] = top;
      }
    }
    return matrix;
  }
  
  
  console.log(rotateMatrix([[1,2,7,4], [5,2,7,8], [9,1,4,5], [9,4,6,1]])) 
  //[ [9,9,5,1], [4,1,2,2], [6,4,7,7], [1,5,8,4] ]
  console.log(rotateMatrix([[1,7,4], [5,2,7,8], [9,1,4,5], [9,4,6,1]])) //"Can't be flipped"