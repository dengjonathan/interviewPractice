/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/* var reverseList = function(head, prev=null) {
    if (!head) {
        return prev;
    }
    const oldNext = head.next;
    head.next = prev;
    return reverseList(oldNext, head);   
};
*/

const reverseList = head => {
    let current = head;
    let prev = null;
    while (current) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
        
    }
    return prev;
};
