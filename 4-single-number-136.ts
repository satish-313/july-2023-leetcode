function singleNumber(nums:number[]): number {
    let xor = 0;

    for (let num of nums) {
        console.log("before xor : ",xor," with num : ",num)
        xor = xor ^ num;
        console.log("after xor : ",xor)
    }

    return xor;
}

console.log(singleNumber([4,1,2,1,4]));
