class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

class Queue {
    private h: number;
    private l: number;
    private item: { [index: number]: TreeNode };

    constructor() {
        this.h = 0;
        this.l = 0;
        this.item = {};
    }

    push(n: TreeNode): void {
        this.item[this.l++] = n;
    }

    shift(): TreeNode {
        let r = this.item[this.h];
        delete this.item[this.h++];
        return r;
    }

    length(): number {
        return this.l - this.h;
    }
}

let a7 = new TreeNode(7);
let a4 = new TreeNode(4);
let a2 = new TreeNode(2, a7, a4);
let a6 = new TreeNode(6);
let a5 = new TreeNode(5, a6, a2);
let a0 = new TreeNode(0);
let a8 = new TreeNode(8);
let a1 = new TreeNode(1, a0, a8);
let a3 = new TreeNode(3, a5, a1);

function distanceK(
    root: TreeNode | null,
    target: TreeNode | null,
    k: number
): number[] {
    if (root === null) return [];
    const ans: number[] = [];

    function buildGraph(cur: TreeNode , par: TreeNode | null) {
        if (graph.get(cur.val) === undefined) {
            graph.set(cur.val, []);
        }

        if (cur && par) {
            let t = graph.get(cur.val)!;
            t.push(par.val);

            if (graph.get(par.val) === undefined) {
                graph.set(par.val, []);
            }

            let r = graph.get(par.val)!;
            r.push(cur.val);
        }

        if (cur && cur.left) buildGraph(cur.left, cur);
        if (cur && cur.right) buildGraph(cur.right, cur);
    }

    let graph = new Map<number, number[]>();
    buildGraph(root, null);
    console.log(graph);
    let visited = new Set([target!.val]);

    function dfs(n: number, d: number) {
        if (d === k) {
            ans.push(n);
            return;
        }

        for (let num of graph.get(n)!) {
            if (!visited.has(num)) {
                dfs(num, d + 1);
                visited.add(num);
            }
        }
    }

    dfs(target!.val, 0);
    return ans;
}
let b = new TreeNode(1);
// console.log(distanceK(a3, a5, 2));
console.log(distanceK(b, b, 3));
