function getNeighbors(row, col, matrix) {
  // let neighbors = []
  // // Check top
  // let up = [row - 1, col]
  // if (row - 1 >= 0 && matrix[row - 1][col] === 1) neighbors.push(up)
  // // Check top right
  // let topRight = [row - 1, col + 1]
  // if (row - 1 >= 0 && col + 1 <= matrix[row].length - 1 && matrix[row - 1][col + 1] === 1) neighbors.push(topRight)
  // // Check right
  // let right = [row, col + 1]
  // if (col + 1 <= matrix[row].length - 1 && matrix[row][col + 1] === 1) neighbors.push(right)
  // // Check bottom right
  // let bottomRight = [row + 1, col + 1]
  // if (row + 1 <= matrix.length - 1 && col + 1 <= matrix.length - 1 && matrix[row + 1][col + 1] === 1) neighbors.push(bottomRight)
  // // Check bottom
  // let down = [row + 1, col]
  // if (row + 1 <= matrix.length - 1 && matrix[row + 1][col] === 1) neighbors.push(down)
  // // Check bottom left
  // let bottomLeft = [row + 1, col - 1]
  // if (row + 1 <= matrix.length - 1 && col - 1 >= 0 && matrix[row + 1][col - 1] === 1) neighbors.push(bottomLeft)
  // // Check left
  // let left = [row, col - 1]
  // if (col - 1 >= 0 && matrix[row][col - 1] === 1) neighbors.push(left)
  // // Check top left
  // let topLeft = [row - 1, col - 1]
  // if (row - 1 >= 0 && col - 1 >= 0 && matrix[row - 1][col - 1] === 1) neighbors.push(topLeft)
  // // Return neighbors
  // return neighbors

  const neighbors = [
    //top //bottom //left //right //top right //top left //bottom right //bottom left
    [row - 1, col],
    [row + 1, col],
    [row, col - 1],
    [row, col + 1],
    [row - 1, col + 1],
    [row - 1, col - 1],
    [row + 1, col + 1],
    [row + 1, col - 1],
  ]
  const validNeighbors = neighbors.filter((currNode) => {
    const [row, col] = currNode
    return matrix[row] && matrix[row][col] === 1
  })
  return validNeighbors
}

function countIslands(matrix) {

  // Create a visited set to store visited nodes
  // Initialize count to 0
  // Iterate through all indices in matrix
  // If an index contains a 1 and has not been visited, 
  // increment island count and start traversing neighbors
  // DO THE THING (increment island count by 1)
  // Initialize a stack with current index
  // Add stringified version of current index to the visited set
  // While stack contains elements
  // Pop element from stack
  // Get valid neighbors of current element
  // Iterate over neigbors
  // If neighbor has not been visited
  // Add neighbor to stack
  // Mark neighbor as visited
  // Return island count

  // Your code here
}

// Uncomment the lines below for local testing
// const matrix = [
//                 [1,1,1,0,0],
//                 [0,1,1,0,1],
//                 [0,1,1,0,1]
//               ]

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

// console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];
