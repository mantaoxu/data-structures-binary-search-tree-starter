// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/

// Hint: it may be helpful to get the height of your BST


function getHeight(root){
  if(!root) return -1;
  return 1 + Math.max(getHeight(root.left), getHeight(root.right));
};

function isBalanced(root) {
  if (!root) return true;
  let heightDifference = Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1;
  return heightDifference && isBalanced(root.left) && isBalanced(root.right)

}
