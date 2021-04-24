class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class Linked_list {
    constructor(head) {
        this.head = head;
    }
    add(value) {
        const newNode = new Node(value);
        // this.head.next = newNode;
        let current = this.head;
        while(current.next != null){
            current = current.next;
        }
        current.next = newNode;
    }
}

const head = new Node(1500);
const ManobBondhon = new Linked_list(head);
ManobBondhon.add(27)
ManobBondhon.add(37)

console.log(JSON.stringify(ManobBondhon));