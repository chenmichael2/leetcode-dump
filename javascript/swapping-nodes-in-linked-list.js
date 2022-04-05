function swapNode(head, k) {
    class Node {
        constructor(data) {
            this.data = data;
            this.next = null;
            this.prev = null;
        }
    }

    class SLL {
        construct() {
            this.root = null;
        }

        insert(data) {
            let newNode = new Node(data);
            if (this.root === null) {
                newNode = this.root;
            } else {
                insertNode();
            }
        }

        insertNode() {
            
        }
    }
}

console.log('Input: head = [1,2,3,4,5], k = 2' , 'Expected Output: [1,4,3,2,5]', 'Output: ', swapNode([1,2,3,4,5], 2));
console.log('Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5' , 'Expected Output: [7,9,6,6,8,7,3,0,9,5]', 'Output: ', swapNode([7,9,6,6,7,8,3,0,9,5], 5));