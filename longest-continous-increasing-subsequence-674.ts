function findLengthOfLCIS(nums:number[]):number {
    let len = 1;
    let maxLen = 1;

    for (let i=1; i<nums.length; i++) {
        if (nums[i] <= nums[i-1]) i = 1;
        else i += 1;

        maxLen = Math.max(len,maxLen)
    }

    return maxLen;
}