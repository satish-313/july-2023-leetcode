class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function addTwoNumber(
    l1: ListNode | null,
    l2: ListNode | null
): ListNode | null {
    let ans = new ListNode();
    let cur = ans;

    function rev(c: ListNode | null): ListNode | null {
        let p: ListNode | null = null;
        let n: ListNode | null = null;

        while (c) {
            n = c.next;
            c = p;
            p = c;
            c = n;
        }

        return p;
    }

    let h1 = rev(l1);
    let h2 = rev(l2);
    let carry = 0;

    while (h1 || h2 || carry) {
        let sum = carry;
        if (h1) {
            sum += h1.val;
            h1 = h1.next;
        }

        if (h2) {
            sum += h2.val;
            h2 = h2.next;
        }

        carry = Math.floor(sum / 10);
        cur.next = new ListNode(sum % 10);
        cur = cur.next;
    }

    return rev(ans.next);
}
