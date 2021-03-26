class Node {
  constructor(el) {
    this.el = el;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node('head');
  }

  // 用于查找
  find(el) {
    let node = this.headl
    while (node !== null && node.el !== el) {
      node = node.next
    }
    return node;
  }
  // 查找前一个
  findPre(el) {
    let node = this.head;
    while (node.next !== null && node.next.el !== el) {
      node = node.next
    }
    return node;
  }

  /**
   * 插入
   * @param {*} el 
   * @param {*} item 
   */
  insert(el, item) {
    const newNode = new Node(el);
    const node = this.find(item);
    newNode.next = node.next;
    node.next = newNode;
  }

  remove(el) {
    const nodePre = this.findPre(el);
    if(nodePre.next !== null) {
      nodePre.next = nodePre.next.next;
    }
  }
}