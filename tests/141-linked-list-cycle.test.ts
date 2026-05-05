import { describe, it, expect } from 'vitest';
import { hasCycle } from '@/141-linked-list-cycle';
import { ListNode } from '@/141-linked-list-cycle/solution';

describe('141-linked-list-cycle', () => {
  it('test case 1', () => {
    const head = new ListNode(1);
    const node2 = new ListNode(2);
    const node3 = new ListNode(3);
    const node4 = new ListNode(4);

    head.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node2;

    expect(hasCycle(head)).toEqual(true);
  });
  it('test case 2', () => {
    const head = new ListNode(57);
    const node2 = new ListNode(2);
    const node3 = new ListNode(55);
    const node4 = new ListNode(54);
    const node5 = new ListNode(56);
    const node6 = new ListNode(5);
    const node7 = new ListNode(7);
    const node8 = new ListNode(6);
    const node9 = new ListNode(9);

    head.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;
    node5.next = node6;
    node6.next = node7;
    node7.next = node8;
    node8.next = node9;

    expect(hasCycle(head)).toEqual(false);
  });
});
