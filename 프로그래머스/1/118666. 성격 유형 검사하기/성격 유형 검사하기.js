function solution(survey, choices) {
  const types = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  let answer = "";

  // 각 선택지에 따라 성격 유형에 가중치 부여
  for (let i = 0; i < choices.length; i++) {
    const [leftType, rightType] = survey[i].split("");
    const result = Math.abs(choices[i] - 4);
    if (choices[i] < 4) {
      // 비동의일 때는 왼쪽 요소에 가중치 부여
      types[leftType] += result;
    } else if (choices[i] > 4) {
      // 동의일 때는 오른쪽 요소에 가중치 부여
      types[rightType] += result;
    }
  }

  const type = Object.keys(types);
  
  // 성격 유형 결정
  for (let i = 0; i < type.length; i += 2) {
    const leftType = types[type[i]];
    const rightType = types[type[i + 1]];
    if (leftType >= rightType) {
      // 가중치가 같거나 클 때는 왼쪽 요소 선택
      answer += type[i];
    } else {
      // 가중치가 작을 때는 오른쪽 요소 선택
      answer += type[i + 1];
    }
  }
  return answer;
}
