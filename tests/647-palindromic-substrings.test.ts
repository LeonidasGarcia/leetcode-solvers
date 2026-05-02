import { describe, it, expect } from 'vitest';
import { countSubstrings } from '@/647-palindromic-substrings';

describe('647-palindromic-substrings', () => {
  it('test case 1', () => {
    expect(countSubstrings('aaa')).toEqual(6);
  });
  it('test case 2', () => {
    expect(countSubstrings('aaab')).toEqual(7);
  });
  it('test case 3', () => {
    expect(countSubstrings('aa')).toEqual(3);
  });
});
