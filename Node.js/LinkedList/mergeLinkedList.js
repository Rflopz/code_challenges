/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (!l1) return l2;
  else if (!l2) return l1;
  else if (l1.val <= l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }

  // let container = [];
  // const header = new ListNode(-1);
  // let newList = header;

  // if (list1 !== null) container.push(list1.val);

  // if (list2 !== null) container.push(list2.val);

  // while (list1 && list1.next) {
  //   list1 = list1.next;
  //   container.push(list1.val);
  // }

  // while (list2 && list2.next) {
  //   list2 = list2.next;
  //   container.push(list2.val);
  // }

  // container = container.sort((a, b) => a - b);

  // for (let i = 0; i < container.length; i++) {
  //   newList.next = new ListNode(container[i], null);
  //   newList = newList.next;
  // }

  // return header.next;
};
