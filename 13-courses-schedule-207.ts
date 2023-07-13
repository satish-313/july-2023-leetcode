function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    let adj: number[][] = new Array(numCourses).fill(null).map(() => [])
    let visit = new Array(numCourses).fill(false);
    let inStack = new Array(numCourses).fill(false);

    for (let i = 0; i < prerequisites.length; i++) {
        let [a,b] = prerequisites[i]
        // if (!adj[b]) adj[b] = []
        adj[b].push(a);
    }

    function dfs(node: number): boolean {
        if (inStack[node]) return true;
        if (visit[node]) return false;

        visit[node] = true;
        inStack[node] = true;

        for (let n of adj[node]) {
            if (dfs(n)) return true;
        }

        inStack[node] = false;
        return false;
    }

    for (let i = 0; i < numCourses; i++) {
        if (dfs(i)) return false;
    }

    return true;
}

console.log(canFinish(2, [[1, 0]]));
console.log(
    canFinish(2, [
        [1, 0],
        [0, 1],
    ])
);
