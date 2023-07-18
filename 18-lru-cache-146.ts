class LinkNode {
    key: number;
    val: number;
    prev: LinkNode | null;
    next: LinkNode | null;

    constructor(key:number, val:number) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    head: LinkNode | null;
    tail: LinkNode | null;
    maxSize: number;
    curSize: number;
    map: Map<number,LinkNode>

    constructor(capacity: number) {
        this.head = null;
        this.tail = null;
        this.maxSize = capacity;
        this.curSize = 0;
        this.map = new Map()
    }

    get(key: number): number {
        if (!this.map.has(key)) return -1;

        let node = this.map.get(key)!;

        if (this.head === node) return node.val;
        if (this.tail === node) {
            let t = this.tail.prev;
            t.next = null;
            this.tail.prev = null;
            this.tail = t;
        } else {
            node.prev.next = node.next;
            node.next.prev = node.prev;
        }
        node.next = this.head;
        node.prev = null;
        this.head.prev = node;
        this.head = node;
        return this.head.val;
    }

    put(key: number, val: number): void {
        if (this.head == null && this.tail == null) {
            let node = new LinkNode(key,val)
            this.head = node;
            this.tail = node;
            this.curSize += 1;
            this.map.set(key,node)
            return;
        }

        if (this.map.has(key)) {
            let node = this.map.get(key)!;
            node.val = val;
            if (this.head == node) return;
            if (this.tail == node) {
                this.tail = node.prev;
                this.tail.next = null;
            } else {
                node.prev.next = node.next;
                node.next.prev = node.prev;
            }
            node.next = this.head;
            node.prev = null;
            this.head.prev = node;
            this.head = node
        } else {
            let node = new LinkNode(key,val);
            this.map.set(key,node);
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
            this.curSize += 1;
            if (this.curSize > this.maxSize) {
                this.map.delete(this.tail.key);
                let t = this.tail.prev;
                t.next = null;
                this.tail.prev = null;
                this.tail = t;
                this.curSize -= 1
            }
        }
    }
}