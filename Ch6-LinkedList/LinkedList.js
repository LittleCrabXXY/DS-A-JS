// 链表的实现

module.exports = LinkedList;

// 节点
function Node(element) {
    this.element = element;
    this.next = null;
}

// 链表
function LinkedList() {
    this.head = new Node(null);   // 链表头
}
LinkedList.prototype = {
    constructor: LinkedList,
    insert: function(el, preEl) {   // 插入
        var preElNode = this.head;
        if (!preEl) {   // 未指定参考前项，默认为链表尾
            while (preElNode.next) {
                preElNode = preElNode.next;
            }
        } else {    // 指定参考前项，查找该项
            preElNode = this.search(preEl);
        }
        var result = false; // insert结果
        if (preElNode) {    // 有参考前项
            var newNode = new Node(el);
            newNode.next = preElNode.next;
            preElNode.next = newNode;
            result = true;
        }

        return result;
    },
    remove: function(el) {  // 删除
        // 找出待删除节点的前一项
        var preNode = this.head;
        var curNode = preNode.next;
        while (curNode && curNode.element !== el) {
            preNode = curNode;
            curNode = curNode.next;
        }
        // 有则删除节点
        if (curNode) {
            preNode.next = curNode.next;
            curNode.next = null;
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
    output: function() {    // 输出链表
        var curNode = this.head.next;
        while (curNode) {
            console.log(curNode.element);
            curNode = curNode.next;
        }
    }
};