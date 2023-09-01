class ListNode<T> {
    value: T;
    next: ListNode<T>;
    constructor(value: T) {
        this.value = null;
        this.next = null;
    }
}


class LinkedList<T> {
    head: ListNode<T> | null;
    size: number;
    constructor() {
        this.head = null;
        this.size = 0;
    }

    push(value: T): boolean {
        const newNode = new ListNode<T>(value)
        // Sets head to new node if head is currently null
        if(!this.head) {
            this.head = newNode;
        }

        let current  = this.head;
        // iterate through next until get to last node in the list
        while(current.next) {
            current = current.next;
        }
        current.next = newNode;
        this.size++;

        return true;
    }
}




