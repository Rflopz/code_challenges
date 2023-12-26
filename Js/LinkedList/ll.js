class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  size = 0;

  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.size++;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) this.head = newNode;
    else this.tail.next = newNode;

    this.tail = newNode;
    this.size++;
    return this;
  }

  pop() {
    let current = this.head;
    let end = this.head;

    while (end.next) {
      current = end;
      end = end.next;
    }

    current.next = null;
    this.tail = current;
    this.size--;

    if (this.size === 0) {
      this.head = null;
      this.tail = null;
    }

    return this;
  }
}

const ll = new LinkedList(3);
ll.push(4).pop();
console.log(ll);
