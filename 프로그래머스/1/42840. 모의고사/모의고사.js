function solution(answers) {
    const man1 = [1, 2, 3, 4, 5];
    const man2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let answer1 = 0;
    let answer2 = 0;
    let answer3 = 0;

    const sum = [];

    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === man1[i % man1.length]) {
            answer1++;
        }
        if (answers[i] === man2[i % man2.length]) {
            answer2++;
        }
        if (answers[i] === man3[i % man3.length]) {
            answer3++;
        }
    }

    sum.push(answer1);
    sum.push(answer2);
    sum.push(answer3);

    const best = Math.max(...sum);

    const result = [];

    for (let i = 0; i < sum.length; i++) {
        if (sum[i] === best) {
            result.push(i + 1); // 수포자 번호는 1부터 시작하므로 +1 해줍니다.
        }
    }

    return result;
}
