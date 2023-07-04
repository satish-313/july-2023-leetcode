function singleNumber(nums: number[]): number {
    let ones = 0;
    let twos = 0;

    for (let num of nums) {
        console.log(
            "before ones : ",
            ones,
            "and two ",
            twos,
            " with num : ",
            num
        );
        ones ^= num & ~twos;
        console.log("after ones ", ones);
        console.log("before twos : ", twos);
        twos ^= num & ~ones;
    }

    return ones
}

//console.log(singleNumber([2,2,3,2]));
console.log(singleNumber([0, 1, 0, 1, 0, 1, 99]));
