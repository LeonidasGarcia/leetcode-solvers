export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function hasCycle(head: ListNode | null): boolean {
  let t: ListNode | null | undefined = head;
  let h: ListNode | null | undefined = head?.next?.next;

  while (h !== undefined) {
    if (t === h) {
      return true;
    }

    t = t?.next;
    h = h?.next?.next;
  }

  return false;
}
