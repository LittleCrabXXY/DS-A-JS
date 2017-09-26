// 双向链表的实现

module.exports = DLinkedList;

// 双向链表的节点
function DNode(element) {
    this.element = element;
    this.next = null;
    this.pre = null;
}

// 双向链表
function DLinkedList() {
    this.head = new DNode(null);    // 链表头
}
DLinkedList.prototype = {
    constructor: DLinkedList,
    insert: function(el, preEl) {   // 插入
        var preElNode = this.head;
        if (!preEl) {
            while (preElNode.next) {    // 未指定参考前项，默认为链表尾
                preElNode = preElNode.next;
            }
        } else {    // 指定参考前项，查找该项
            preElNode = this.search(preEl);
        }
        var result = false; // insert结果
        if (preElNode) {    // 有参考前项
            var newNode = new DNode(el);
            // 插入节点
            newNode.next = preElNode.next;
            newNode.pre = preElNode;    // 新节点的前一项
            preElNode.next = newNode;
            newNode.next && (newNode.next.pre = newNode);   // 新节点后一项的前一项
        }

        return result;
    },
    remove: function(el) {  // 删除
        // 找出待删除节点
        var curNode = this.search(el);
        if (curNode) {  // 有则删除节点
            // 待删除节点的前一项
            var preNode = curNode.pre;
            // 待删除节点的后一项
            var nextNode = curNode.next;
            // 删除节点
            preNode.next = nextNode;
            nextNode && (nextNode.pre = preNode);
            curNode.next = null;
            curNode.pre = null;
        }

        return curNode;
    },
    search: function(el) {  // 查找
        var curNode = this.head.next;
        while (curNode && curNode.element !== el) {
            curNode = curNode.next;
        }

        return curNode;
    },
    output: function(isReverse) {   // 输出链表
        var curNode = this.head.next;
        if (!isReverse) {   // 正序输出
            while (curNode) {
                console.log(curNode.element);
                curNode = curNode.next;
            }
        } else {    // 逆序输出
            // 找到最后一个节点
            while (curNode.next) {
                curNode = curNode.next;
            }
            // 输出
            while (curNode && curNode.element !== null) {
                console.log(curNode.element);
                curNode = curNode.pre;
            }
        }
    }
};