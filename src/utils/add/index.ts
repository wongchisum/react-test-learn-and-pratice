type Args = number[] | number[][];

const _flat = Array.prototype.flat;

/**
 *
 * @param nums
 * @returns
 * 将参数拍平，进行累加计算
 */
export const add = (...nums: Args) => {
  const flatArgs = _flat.call(nums) as number[];
  return flatArgs.reduce((total: number, current: number) => {
    return total + current;
  }, 0);
};
