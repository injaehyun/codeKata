







function solution(answers) {
    const man1 = [1, 2, 3, 4, 5];
    const man2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
// 1~3번 수포자의 정답 패턴을 배열에 넣는다
    let answer1 = 0;
    let answer2 = 0;
    let answer3 = 0;
// 1~3번 수포자의 정답갯수를 넣을 변수를 각각 만든다.
    const sum=[];
// 수포자들의 정답갯수를 넣을 배열
    const result =[];
// 결과값을 넣을 배열
    for (i=0; i < answers.length; i++){
        if(answers[i] === man1[i % man1.length]){
            answer1++;
        }
        if(answers[i] === man2[i % man2.length]){
            answer2++;
        } 
        if(answers[i] === man3[i % man3.length]){
                answer3++;
        } 
    }
    // 앤서의 길이만큼 반복문을 돌린다.
// 조건문으로 앤서의 i가 1~3번 수포자의 i번째 배열과 같으면 정답수를 1씩 더한다.
        sum.push(answer1)
        sum.push(answer2)
        sum.push(answer3)
    //각 수포자의 정답수를 배열에 담는다
const best = Math.max(...sum)
// 최대값을 찾는다.
        for(let i=0; i<sum.length; i++){
            if(sum[i] === best){
                result.push(i+1)
            }
        }
// 가장 많이 맞춘사람을 배열에 담아 반환한다.

    return result;
}