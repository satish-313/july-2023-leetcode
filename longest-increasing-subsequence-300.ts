function lengthOfLIS(nums: number[]): number {
    let maxLen = 1;

    for (let i = 0; i < nums.length; i++) {
        let n = 1;
        let tem = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            if (tem < nums[j]) {
                n += 1;
                tem = nums[j];
            } else continue;
        }
    }

    return maxLen;
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // 4

function bruteForce(nums: number[]): number {
    function rec(i: number, prev: number): number {
        if (i >= nums.length) return 0;
        let take = 0;
        let noTake = rec(i + 1, prev);
        if (nums[i] > prev) take = 1 + rec(i + 1, nums[i]);
        return Math.max(take, noTake);
    }

    return rec(0, -Infinity);
}
