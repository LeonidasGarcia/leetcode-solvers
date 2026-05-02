import { describe, it, expect } from 'vitest';
import { missingNumber } from '@/268-missing-number';

describe('268-missing-number', () => {
  it('test case 1', () => {
    expect(missingNumber([0, 2, 3, 4])).toEqual(1);
  });
  it('test case 2', () => {
    expect(missingNumber([1, 3, 4, 5, 2])).toEqual(0);
  });
  it('test case 3', () => {
    expect(missingNumber([0, 1])).toEqual(2);
  });
});
