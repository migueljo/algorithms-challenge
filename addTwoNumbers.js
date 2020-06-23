function LinkedList(items) {
    let head = { val:  items[0], next: null }
    let actual = head
    for (let i = 1; i < items.length; i++) {
        actual.next = { val: items[i], next: null }
        actual = actual.next
    }
    return head
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let l1Node = l1
    let l2Node = l2
    let l1Number = []
    let l2Number = []

    while (l1Node || l2Node) {
        if (l1Node) l1Number.unshift(l1Node.val)
        if (l2Node) l2Number.unshift(l2Node.val)

        l1Node = l1Node && l1Node.next
        l2Node = l2Node && l2Node.next
    }
    l1Number = BigInt(l1Number.join(''))
    l2Number = BigInt(l2Number.join(''))
    let total = `${l1Number + l2Number}`.toString().split('').reverse()
    const totalHead = LinkedList(total.map(item => BigInt(item)))
    return totalHead
};
