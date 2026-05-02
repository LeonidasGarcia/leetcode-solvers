export function missingNumber(nums: number[]): number {
  const n = nums.length;

  let desiredSum = n * (n + 1);

  for (const num of nums) {
    desiredSum -= num * 2;
  }

  return desiredSum / 2;
}
