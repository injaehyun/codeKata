function solution(s) {
    let lastSeen = {};
    let result = [];

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (lastSeen[char] !== undefined) {

            result.push(i - lastSeen[char]);
        } else {

            result.push(-1);
        }

        lastSeen[char] = i;
    }

    return result;
}
