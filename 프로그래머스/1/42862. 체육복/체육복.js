function solution(n, lost, reserve) {
    // 여벌 체육복을 가져온 학생 중 도난당한 학생 제거
    let realLost = lost.filter(l => !reserve.includes(l));
    let realReserve = reserve.filter(r => !lost.includes(r));

    let answer = n - realLost.length;

    // 오름차순 정렬
    realLost.sort((a, b) => a - b);

    realLost.forEach(l => {
        if (realReserve.includes(l - 1)) {
            realReserve = realReserve.filter(r => r !== l - 1);
            answer++;
        } else if (realReserve.includes(l + 1)) {
            realReserve = realReserve.filter(r => r !== l + 1);
            answer++;
        }
    });

    return answer;
}
