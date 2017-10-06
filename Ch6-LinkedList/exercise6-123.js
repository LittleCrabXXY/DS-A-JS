// 实现advance(n)方法，使当前节点向前移动n个节点。
// 实现back(n)方法，使当前节点向后移动n个节点。
// 实现show()方法，只显示当前节点上的数据。

/**
 * 使当前节点向前移动n个节点（向前：单向链表从头至尾方向）
 * @param {number} n 需要移动的节点个数
 * @return {boolean} 当n不合法时返回false，否则返回true
 */
function advance(n) {
    // n小于0不合法，返回false
    if (n < 0) {
        return false;
    }
    // this.current不存在时初始化
    if (typeof this.current === 'undefined') {
        this.current = this.head;
    }
    // 向前移动
    while (n--) {
        this.current = this.current.next;
        // 单向链表、双向链表：判断this.current || 循环链表：判断this.current.element
        if (this.current === null || this.current.element === null) {
            this.current = this.head.next;
        }
    }

    return true;
}

/**
 * 使当前节点向后移动n个节点，移动方向与advance()相反
 * @param {number} n 需要移动的节点个数
 * @return {boolean} 当n不合法时返回false，否则返回true
 */
function back(n) {
    // n小于0不合法，返回false
    if (n < 0) {
        return false;
    }
    // this.current不存在时初始化
    if (typeof this.current === 'undefined') {
        this.current = this.head;
    }
    // 找到链表尾
    var tail = this.head;
    while (tail.next) {
        tail = tail.next;
    }
    // 向后移动
    while (n--) {
        this.current = this.current.pre;
        if (this.current === this.head) {
            this.current = tail;
        }
    }

    return true;
}

/**
 * 显示当前节点上的数据
 */
function show() {
    if (!this.current) {
        console.log('[info] current does not exist');
        return;
    }
    console.log('the current node:', this.current.element);
}

// 单向链表LinkedList
console.log('----- LinkedList -----');
var LinkedList = require('./LinkedList.js');
LinkedList.prototype.advance = advance;
LinkedList.prototype.show = show;
var linkedListIns = new LinkedList();
linkedListIns.show();
linkedListIns.insert(2);
linkedListIns.insert(4);
console.log('after insert:');
linkedListIns.output();
linkedListIns.advance(4);
console.log('after advance(4):');
linkedListIns.show();

// 双向链表DLinkedList
console.log('----- DLinkedList -----');
var DLinkedList = require('./DLinkedList.js');
DLinkedList.prototype.advance = advance;
DLinkedList.prototype.back = back;
DLinkedList.prototype.show = show;
var dLinkedListIns = new DLinkedList();
dLinkedListIns.show();
dLinkedListIns.insert(2);
dLinkedListIns.insert(4);
dLinkedListIns.insert(3);
console.log('after insert:');
dLinkedListIns.output();
dLinkedListIns.advance(4);
console.log('after advance(4):');
dLinkedListIns.show();
dLinkedListIns.back(5);
console.log('after back(5):');
dLinkedListIns.show();

// 循环链表CLinkedList
console.log('----- CLinkedList -----');
var CLinkedList = require('./CLinkedList.js');
CLinkedList.prototype.advance = advance;
CLinkedList.prototype.show = show;
var cLinkedListIns = new CLinkedList();
cLinkedListIns.show();
cLinkedListIns.insert(2);
cLinkedListIns.insert(4);
console.log('after insert:');
cLinkedListIns.output();
cLinkedListIns.advance(3);
console.log('after advance(3):');
cLinkedListIns.show();