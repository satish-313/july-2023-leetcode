function asteroidCollision(asteroids: number[]): number[] {
    const stack: number[] = [];

    function isPositive(a: number): boolean {
        if (a > 0) return true;
        return false;
    }

    for (let a of asteroids) {
        if (stack.length === 0) {
            stack.push(a);
            continue;
        }
        let b = stack[stack.length - 1];

        // collide condition if b is right (+ve) and a(-negative)
        if (isPositive(b) && !isPositive(a)) {
            while (isPositive(b) && !isPositive(a)) {
                if (-a === b) {
                    stack.pop();
                    break;
                } else if (-a > b) {
                    stack.pop();
                    if (stack.length === 0) {
                        stack.push(a);
                        break;
                    }
                    b = stack[stack.length - 1];
                    if (!isPositive(b)) stack.push(a);
                } else break;
            }
        } else {
            // not collide condition add to stack
            stack.push(a);
        }
        // console.log(stack);
    }

    return stack;
}

console.log(asteroidCollision([-2, -2, 1, -2]));

function asteroidCollisionbest(ast: number[]): number[] {
    const stack: number[] = [ast[0]];

    for (let i = 1; i < ast.length; i++) {
        if (stack.length === 0) {
            stack.push(ast[i]);
        } else if (stack[stack.length - 1] < 0 || ast[i] > 0) {
            stack.push(ast[i]);
        } else {
            if (Math.abs(ast[i]) > stack[stack.length - 1]) {
                stack.pop();
                i -= 1;
            } else if (Math.abs(ast[i]) === stack[stack.length - 1]) {
                stack.pop();
            }
        }
    }
    return stack;
}
