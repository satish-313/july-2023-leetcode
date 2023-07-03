function buddyStrings(s:string, goal:string): boolean {
    if (s.length !== goal.length) return false;

    if (s === goal) {
        let arr = new Array(26).fill(0);

        for (let char of s){
            arr[char.charCodeAt(0) - 97] += 1;
            if (arr[char.charCodeAt(0) - 97] === 2) return true;
        }

        return false;
    }

    let fIdx = -1;
    let sIdx = -1;

    for (let i=0; i<s.length; ++i){
        if (s[i] !== goal[i]) {
            if (fIdx === -1) fIdx = i;
            else if (sIdx === -1) sIdx = i;
            else return false;
        }
    }

    if (sIdx === -1) return false;
    
    return (s[fIdx] === goal[sIdx] && s[sIdx] === goal[fIdx]);
}
