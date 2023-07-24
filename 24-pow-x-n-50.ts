function myPow(x: number, n: number): number {
    if (n === 0) return 1;
    if (n < 0) return 1 / myPow(x, -n);

    if (n % 2 === 0) {
        return myPow(x * x, Math.floor(n / 2));
    } else {
        return x * myPow(x * x, Math.floor(n / 2));
    }
}

console.log(myPow(2.0, 10)); // 1024.00000
console.log(myPow(2.1, 3)); // 9.26100
console.log(myPow(2.0, -2)); // 0.25000
