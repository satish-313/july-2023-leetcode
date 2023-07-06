function minSubArrayLen(target: number, nums: number[]): number {
    let minLen = Infinity;
    let sum = 0;
    let l = 0;
    let r = 0;
    let maxSum = 0;

    while (l <= r && r < nums.length) {
        while (sum <= target && r < nums.length) {
            sum += nums[r];
            r += 1;
            if (sum === target) minLen = Math.min(minLen, r - l);
        }

        minLen = Math.min(minLen, r - l);
        maxSum = Math.max(maxSum, sum);
        console.log(l, r, minLen, sum);

        while (sum >= target) {
            sum -= nums[l];
            l += 1;
            if (sum >= target) minLen = Math.min(minLen, r - l);
        }

        console.log(l, r, minLen, sum);
    }

    return maxSum >= target ? minLen : 0;
}

// console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
// console.log(minSubArrayLen(4, [1, 4, 4]));
// console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
// console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]));
console.log(minSubArrayLen(5, [2, 3, 1, 1, 1, 1, 1]));

function minSubArrayLenBest(target: number, nums: number[]): number {
    let count = Infinity;
    let sum = 0;

    let i = 0;
    let j = 0;

    while (j < nums.length && sum < target) {
        sum += nums[j++];
    }

    while (i <= j) {
        if (sum >= target) {
            count = Math.min(j - i, count);
        }

        if (sum >= target || j >= nums.length) {
            sum -= nums[i++];
        } else {
            sum += nums[j++];
        }
    }

    return count === Infinity ? 0 : count;
}
