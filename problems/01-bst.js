class TreeNode {
constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}
}

class BST {        
    // Initialize an empty binary search tree
    constructor() {
        this.root = null;
    }

    // Insert a node into the binary search tree
    insert(val, currentNode=this.root) {
        if(!this.root) {
            this.root = new TreeNode(val);   //creating the very first new root
            return;
        }  // now has the first root now, YAY!
        
        /**find a place to insert the node */
        if(val < currentNode.val){  // if the val is < than currentNode'value, go to the left
            //recursive call 
            if(!currentNode.left){  // if there is no left node on the currentNode, then the new treeNode is the one!
                currentNode.left =  new TreeNode(val);
            } else {    //otherwise, recursive call the insert method
                this.insert(val, currentNode.left);
            }
        } else { // if the val is > than currentNode'value, go to the right
            if(!currentNode.right){
                currentNode.right =  new TreeNode(val);
            } else {
                this.insert(val, currentNode.right);
            }
        }    
    }
/** need to print out the value of increasing order*/
    inOrderPrint(currentNode=this.root){
        if(!currentNode) return;

        return[...inOrderPrint(currentNode.left), currentNode.value, ...inOrderPrint(currentNode.right)]
    }


    // Perform a recursive search through the binary search tree
    searchRecur(val, currentNode=this.root) {
        // Your code here
    }

    // Perform an iterative search through the binary search tree
    searchIter(val) {
        // Your code here
    }
}

module.exports = {
    TreeNode,
    BST
};