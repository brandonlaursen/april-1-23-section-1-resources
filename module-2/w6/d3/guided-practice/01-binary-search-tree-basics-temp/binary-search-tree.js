// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    // Your code here
    this.root = null;
  }

  insert(val, currentNode = this.root) {
    // Your code here
    const newNode = new TreeNode(val);

    if (!this.root) {
      this.root = newNode
      return;
    };

    if(val < currentNode.val) {

      if(!currentNode.left) {
        currentNode.left = newNode
      } else {
        this.insert(val, currentNode.left);
      }

    } else {

      if(!currentNode.right) {
        currentNode.right = newNode
      } else {
        this.insert(val, currentNode.right);
      }
    }
  }

  search(val) {
    // Your code here
  }

  preOrderTraversal(currentNode = this.root) {
    // Your code here
  }

  inOrderTraversal(currentNode = this.root) {
    // Your code here
  }

  postOrderTraversal(currentNode = this.root) {
    // Your code here
  }

  // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // Your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // Your code here
  }
}

let bst = new BinarySearchTree();
bst.insert(4);
bst.insert(2);
bst.insert(6);
bst.insert(1);
// console.log(bst.root.left);

module.exports = { BinarySearchTree, TreeNode };
