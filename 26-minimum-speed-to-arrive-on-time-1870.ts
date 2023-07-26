function minSpeedOnTime(dist: number[], hour: number): number {
    let max = -Infinity;
    let min = Infinity;

    for (let i = 0; i < dist.length; i++) {
        if (min > dist[i]) min = dist[i];
        if (max < dist[i]) max = dist[i];
    }

    function isValidSpeed(s: number): boolean {
        let h = 0;

        for (let i = 0; i < dist.length; i++) {
            let a = Math.floor(dist[i] / s);
            let b = dist[i] / s;
            if (i + 1 === dist.length) h += b;
            else {
                if (a === b) {
                    h += a;
                } else if (b > a) {
                    h += Math.ceil(b);
                }
            }
            // console.log(a, b, h);
        }

        return hour >= Number(h.toFixed(2)) ? true : false;
    }
    let avg = 0;

    while (min <= max) {
        avg = (min + max) >> 1;

        // let a = isValidSpeed(avg - 1);
        // let b = isValidSpeed(avg);
        // console.log(avg, a, b);

        if (!isValidSpeed(avg - 1) && isValidSpeed(avg)) return avg;
        else if (isValidSpeed(avg - 1) && isValidSpeed(avg)) {
            max = avg - 1;
        } else min = avg + 1;
    }

    if (isValidSpeed(10000000)) return 1e7;
    return -1;
}

// console.log(minSpeedOnTime([1, 3, 2], 6)); // 1
// console.log(minSpeedOnTime([1, 3, 2], 2.7)); // 3
// console.log(minSpeedOnTime([1, 3, 2], 1.9)); // -1
console.log(minSpeedOnTime([1, 1, 100000], 2.01)); // 1e7

function bestminSpeedOnTime(dist: number[], hour: number): number {
    let max = Math.max(...dist) * 100;
    let min = 1;

    function getHour(s: number): number {
        let h = 0;

        for (let i = 0; i < dist.length; i++) {
            if (i === dist.length - 1) h += dist[i] / s;
            else h += Math.ceil(dist[i] / s);
        }

        return h;
    }

    let mid = 0;

    while (min < max) {
        mid = (min + max) >> 1;
        if (getHour(mid) > hour) min = mid + 1;
        else max = mid;
    }

    return getHour(min) <= hour ? min : -1;
}
