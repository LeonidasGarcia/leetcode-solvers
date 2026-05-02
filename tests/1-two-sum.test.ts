import { describe, it, expect } from 'vitest';
import { twoSum } from '@/1-two-sum';

describe('1-two-sum', () => {
  it('test case 1', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it('test case 2', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  it('test case 3', () => {
    expect(twoSum([2, 7, 11, 15], 100)).toEqual([]);
  });
});
