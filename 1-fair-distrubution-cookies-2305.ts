function distributeCookies(cookies: number[], k:number): number {
    const distribute:number[] = new Array(k).fill(0);
    const n = cookies.length;

    function dfs(i:number,zeroCount:number){
        if (n-i < zeroCount) return Infinity;
        if (n === i) return Math.max(...distribute);

        let res = Infinity;

        for (let j=0; j<k; j++){
            zeroCount -= distribute[j] === 0 ? 1 : 0;
            distribute[j] += cookies[i];
            res = Math.min(res, dfs(i+1, zeroCount));
            distribute[j] -= cookies[i]
            zeroCount += distribute[j] === 0 ? 1: 0;
        }

        return res
    }
    
    return dfs(0,k);
}
