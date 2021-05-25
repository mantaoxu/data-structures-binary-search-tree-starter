// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

function sortedArrayToBST(nums) {
  if(!nums.length) return null;  //if there is no nums in the tree, just return empty
    
  let midIdx = Math.floor(nums.length / 2) //grab the middle index from the array;
  let root = new TreeNode(nums[midIdx])  // create a new node, set it as the root;
  let leftSubtree = sortedArrayToBST(nums.slice(0, midIdx)); // recursive call, put the left side of nums into the function again, to achieve the recursive call.
  let rightSubtree = sortedArrayToBST(nums.slice(midIdx + 1));
   // linking the roots together
  root.left = leftSubtree; 
  root.right = rightSubtree;
  
  return root;
  
}