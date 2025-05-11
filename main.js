import knightMoves from "./knightsTravails.js";

knightMoves([3, 3], [4, 3]);
// Starting at: [3,3]
// Ending at: [4,3]
// You made it in 3 moves! Here's your path:
//   [3,3]
//   [4,5]
//   [6,4]
//   [4,3]

knightMoves([2, 7], [6, 1]);
// Starting at: [2,7]
// Ending at: [6,1]
// You made it in 4 moves! Here's your path:
//   [2,7]
//   [4,6]
//   [6,5]
//   [7,3]
//   [6,1]

knightMoves([0, 0], [7, 7]);
// Starting at: [0,0]
// Ending at: [7,7]
// You made it in 6 moves! Here's your path:
//   [0,0]
//   [1,2]
//   [2,4]
//   [3,6]
//   [5,7]
//   [6,5]
//   [7,7]
