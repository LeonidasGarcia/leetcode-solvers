import { describe, it, expect } from 'vitest';
import { longestConsecutive } from '@/128-longest-consecutive-sequence';

describe('128-longest-consecutive-sequence', () => {
  it('test case 1', () => {
    expect(longestConsecutive([1, 2, 3, 4, 56, 5, 7, 6, 9])).toEqual(7);
  });
  it('test case 2', () => {
    expect(longestConsecutive([57, 2, 55, 54, 56, 5, 7, 6, 9])).toEqual(4);
  });
  it('test case 3', () => {
    expect(longestConsecutive([1, 22, 23, 4, 56, 5, 24, 6, 9])).toEqual(3);
  });
});
