class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, rigth?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = rigth === undefined ? null : rigth;
    }
}

function allPossibleFBT(n: number): Array<TreeNode | null> {
    let memo = new Map<number, TreeNode[]>();

    function sol(c: number) {
        if (c % 2 === 0) return [];
        if (c === 1) return [new TreeNode()];

        if (memo.has(c)) {
            return memo.get(c)!;
        }

        let res: TreeNode[] = [];
        for (let i = 1; i < c; i += 2) {
            let left = sol(i);
            let right = sol(c - i - 1);

            for (let l of left) {
                for (let r of right) {
                    let root = new TreeNode(0, l, r);
                    res.push(root);
                }
            }
        }
        return (memo[c] = res);
    }
    sol(n);
    return memo[n];
}

console.log(allPossibleFBT(7));
