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
    
    
    // Perform a recursive search through the binary search tree
    // find the target value
    searchRecur(val, currentNode=this.root) {
        if(!currentNode) return false;

        if(val < currentNode.val){ // if the val is < than currentNode'value, then the targetVal maybe in the left sub-tree;
            return this.searchRecur(val, currentNode.left) // recursive this method.
        } else if(val > currentNode.val){
            return this.searchRecur(val, currentNode.right) // recursive this method.
        } else {
            return true; // found the value;
        }  
    }
    
    // Perform an iterative search through the binary search tree
    searchIter(val) {
        let curr = this.root; // decided the currentNode as the root;
        while(curr !== null) {
            if(val < curr.val){  //check the val , compare to the currNode value, change the pointer to the left;
                curr = curr.left;  // change the pointer to the left;
            } else if (val > curr.val){  //check the val , compare to the currNode value, change the pointer to the right;
                curr = curr.right;  // change the pointer to the right;
            } else {
                return true;  // found the value;
            }
        }
        return false;
    }

/** need to print out the value of increasing order*/
    inOrderPrint(currentNode=this.root){
        if(!currentNode) return;
        return[...inOrderPrint(currentNode.left), currentNode.value, ...inOrderPrint(currentNode.right)]
    }
}

module.exports = {
    TreeNode,
    BST
};