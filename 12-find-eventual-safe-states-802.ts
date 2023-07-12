function eventualSafeNode(graph: number[][]): number[] {
    let ans: number[] = [];
    let map = new Map<number, number[]>();
    let isSafe: boolean[] = new Array(graph.length).fill(false);

    for (let i = 0; i < graph.length; i++) {
        map.set(i, []);
        let arr = map.get(i)!;
        arr.push(...graph[i]);
    }

    for (let i = 0; i < graph.length; i++) {
        let arr = map.get(i)!;
        if (arr.length === 0) isSafe[i] = true;
    }

    function dfs(i: number, v: boolean[]): boolean {
        v[i] = true;
        if (isSafe[i]) return true;
        let safeNode = true;
        console.log("before loop : ", i);

        for (let num of map.get(i)!) {
            console.log(num)
            if (v[num] && !isSafe[num]) {
                safeNode = false;
            } else if (!dfs(num, v)) {
                safeNode = false;
            }
            console.log(num, " - ", safeNode);
        }

        if (safeNode) isSafe[i] = true;
        return safeNode;
    }

    for (let i = 0; i < graph.length; i++) {
        if (dfs(i, new Array(graph.length).fill(false))) ans.push(i);
    }

    console.log(isSafe);
    // console.log(map);
    return ans;
}

console.log(eventualSafeNode([[], [0, 2, 3, 4], [3], [4], []]));
// console.log(eventualSafeNode([[1, 2], [2, 3], [5], [0], [5], [], []]));
// console.log(eventualSafeNode([[1, 2, 3, 4], [1, 2], [3, 4], [0, 4], []]));

function eventualSafeNodes(graph: number[][]): number[] {
    let ans:number[] = [];
    let visit:boolean[] = new Array(graph.length).fill(false)

    function isSafe(node:number):boolean {
        let adj = graph[node];
        if (adj.length === 0) return true;
        if (visit[node]) return false;

        visit[node] = true;

        for (let n of adj) {
            if (!isSafe(n)) return false
        }

        graph[node] = [];
        return true;
    }

    for (let i=0; i<graph.length; i++) {
        if (isSafe(i)) ans.push(i)
    }
    return ans;
};