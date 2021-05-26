// Write a function that takes in the root of a
// binary search tree and returns the height.
// You may use your BST implementation to test this out.


// function getHeight(root) {
//   if(!root) return -1;
//   return 1 + Math.max(getHeight(root.left), getHeight(root.right));
// };


/**second method */
function getHeight(root){
  if(!root) return -1;
  var leftHeight = getHeight(root.left);
  var rightHeight = getHeight(root.right);

  return Math.max(leftHeight, rightHeight) + 1;
}

module.exports = {
  getHeight
};