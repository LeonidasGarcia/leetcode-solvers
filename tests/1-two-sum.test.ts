import { describe, it, expect } from 'vitest';
import { twoSum } from '@/1-two-sum';

describe('1-two-sum', () => {
  it('basic case: [2,7,11,15], target=9 returns [0,1]', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it('another case: [3,2,4], target=6 returns [1,2]', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  it('no solution returns empty array', () => {
    expect(twoSum([2, 7, 11, 15], 100)).toEqual([]);
  });
});
