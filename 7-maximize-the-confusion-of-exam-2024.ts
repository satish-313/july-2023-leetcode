function maxConsecutiveAnswer(s:string,k:number):number {
    let start = 0;
    let end = 0;

    type keys = {
        T:number,
        F:number,
    };

    let freq:keys = {T:0,F:0}
    let max = 0;

    for (let i=0; i<s.length; i++){
        if (s[i] === "T") freq["T"]++;
        else freq["F"]++;

        while(freq["T"] > k && freq["F"] > k) {
            if (s[start] === "T") freq["T"]--;
            else freq["F"]--;
            start++;
        }

        max = Math.max(max, end - start + 1)
        end++
    }

    return max;
}
