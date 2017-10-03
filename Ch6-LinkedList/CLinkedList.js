// 循环链表的实现 CircleLinkedList

module.exports = CLinkedList;

// 循环链表的节点
function CNode(element) {
    this.element = element;
    this.next = null;
}

// 循环链表
function CLinkedList() {
    this.head = new CNode(null);
    this.head.next = this.head;     // 指向头节点
}
CLinkedList.prototype = {
    constructor: CLinkedList,
    insert: function(el, preEl) {
        var preElCNode = this.head;
        if (!preEl) {   // 未指定参考前项，默认链表尾
            while (preElCNode.next.element !== null) {
                preElCNode = preElCNode.next;
            }
        } else {    // 指定参考前项，查找该项
            preElCNode = this.search(preEl);
        }
        var result = false;
        if (preElCNode) {   // 有参考前项
            var newCNode = new CNode(el);
            newCNode.next = preElCNode.next;
            preElCNode.next = newCNode;
            result = true;
        }
        
        return result;
    },
    remove: function(el) {
        var preCNode = this.head,
            curCNode = preCNode.next;
        while (curCNode.element !== null) {
            if (curCNode.element === el) {
                break;
            }
            preCNode = curCNode;
            curCNode = preCNode.next;
        }
        if (curCNode.element !== null) {    // 有则删除节点
            preCNode.next = curCNode.next;
            curCNode.next = null;
        }

        return curCNode.element !== null ? curCNode : null;
    },
    search: function(el) {
        var curCNode = this.head.next;
        while (curCNode.element !== null) {
            if (curCNode.element === el) {
                break;
            }
            curCNode = curCNode.next;
        }

        return curCNode.element !== null ? curCNode : null;
    },
    output: function() {
        var curCNode = this.head.next;
        while (curCNode.element !== null) {
            console.log(curCNode.element);
            curCNode = curCNode.next;
        }
    }
};