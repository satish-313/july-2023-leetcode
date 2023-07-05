function longestSubarray(nums: number[]): number {
    let maxLen = 0,
        zeros = 0;
    let i = 0,
        j = 0;

    while (i < nums.length) {
        if (nums[i] === 0) zeros++;

        while (zeros > 1) {
            if (nums[j] === 0) zeros--;
            j++;
        }

        maxLen = Math.max(maxLen, i - j);
        console.log(maxLen, " = ", " = ", i, " = ", j);
        i++;
    }

    return maxLen;
}

console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]));
