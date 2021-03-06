function countInserts(nums) {
    // let counter = 0;
    // let root = 0;
    // let right = 0;
    // let left = 0;
    // nums.forEach(key => {
    //     if (root === 0) {
    //         root = key;
    //         console.log(counter);
    //     } else {
    //         insert(root, key);
    //     }
    // });
    // function insert(root, key) {
    //     if (key < root) {
    //         if (left === 0) {
    //             left = key; 
    //             counter += 1;
    //             console.log(counter);
    //         } else {
    //             console.log(root, left, right);
    //             insert(left, key);
    //         }
    //     } else {
    //         if (right === 0) {
    //             right = key;
    //             counter += 1;
    //             console.log(counter);
    //         } else {
    //             console.log(root, left, right);
    //             insert(right, key);
    //         }
    //     }
    // }

    class Node {
        constructor(data){
            this.data = data;
            this.left = null;
            this.right = null;
        }
    }

    class BST {
        construct(data) {
            this.root = null
        }

        insert(data) {
            let newNode = new Node(data);
            if (this.root === null) {
                this.root = data;
            } else {
                insertNewNode(this.root, newNode)
            }
        }

        insertNewNode(node, newNode) {
            if (newNode.data < node.data) {
                if (node.left === null) {
                    node.left = newNode
                } else {
                    this.insertNewNode(node.left, newNode)
                }
            } else {
                if (node.right === null) {
                    node.right = newNode
                } else {
                    this.insertNewNode(node.right, newNode)
                }
            }
        }
        
    }
}

console.log('INPUT = [2, 1, 3, 4, 2]', 'OUTPUT = 0 1 2 4 6', countInserts([2, 1, 3, 4, 2]));