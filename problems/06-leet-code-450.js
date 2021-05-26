// View the full problem and run the test cases at:
//  https://leetcode.com/problems/delete-node-in-a-bst/

function deleteNode(root, key) {
  if (!root) return null;     // check if there is any root
  if (key > root.val) {    // if the key larger than the root.val, then check the right side of the root
      root.right = deleteNode(root.right, key);
  } else if (key < root.val) {  // if the key less than the root.val, then check the left side of the root
      root.left = deleteNode(root.left, key);
  } else { // found the key
      // has children
      if (root.left !== null && root.right !== null) {
          let min = new TreeNode();
          min = root.right;
          while (min.left !== null) min = min.left;
          root.val = min.val;
          root.right = deleteNode(root.right, min.val);
      } else { // no children
          let newRoot = new TreeNode();
          newRoot = root.left === null ? root.right : root.left;
          root.left = root.right = null;
          return newRoot;
      }
  }
  return root;

}