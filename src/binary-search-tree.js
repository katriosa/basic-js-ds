const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }
  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.rootNode) {
      this.rootNode = newNode;
      return this;
    }
    let currentNode = this.rootNode;
    while (true) {
      if (data === currentNode.data) {
        return undefined;
      }
      if (data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  has(data) {
    if (!this.rootNode) {
      return false;
    }
    let currentNode = this.rootNode;
    while (currentNode) {
      if (currentNode.data === data) {
        return true;
      }
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  find(data) {
    if (!this.rootNode) {
      return null;
    }
    let currentNode = this.rootNode;
    while (currentNode) {
      if (currentNode.data === data) {
        return currentNode;
      }
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return null;
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
    return this;
  }

  removeNode(node, data) {
    if (!node) {
      return null;
    }
    if (data === node.data) {
      if (!node.left && !node.right) {
        return null;
      }
      if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      } else {
        node.data = this.minFromRight(node.right);
        node.right = this.removeNode(node.right, node.data);
      }
    }
    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
    } else {
      node.right = this.removeNode(node.right, data);
    }
    return node;
  }
  minFromRight(node) {
    let minValue = node.data;
    while (node.left) {
      minValue = node.left.data;
      node = node.left;
    }
    return minValue;
  }

  min() {
    if (!this.rootNode) {
      return null;
    }
    let currentNode = this.rootNode;
    while (currentNode.left) {
      currentNode = currentNode.left;

      if (!currentNode.left) {
        return currentNode.data;
      }
    }
    return currentNode.data;
  }

  max() {
    if (!this.rootNode) {
      return null;
    }
    let currentNode = this.rootNode;
    while (currentNode.right) {
      currentNode = currentNode.right;

      if (!currentNode.right) {
        return currentNode.data;
      }
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};