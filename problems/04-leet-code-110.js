// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/

// Hint: it may be helpful to get the height of your BST


const { getHeight } = require("./03-get-height");

function isBalanced(root) {
  if (!root) return true;
  let heightDifference = Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1;
  return heightDifference && isBalanced(root.left) && isBalanced(root.right)

}
