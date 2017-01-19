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
const plusOne = function (head) {
  var plusOneInner = function (head) {
    if (!head.next || plusOneInner(head.next)) {
      const subtotal = head.val + 1;
      head.val = subtotal % 10;
      if (subtotal >= 10) {
        return true;
      }
      return false;
    }
  };
  if (plusOneInner(head)) {
      const first = new ListNode(1);
      first.next = head;
      return first;
  };
  return head;
};