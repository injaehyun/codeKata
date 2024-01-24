function solution(lottos, win_nums) {
    // 로또 순위를 결정하기 위한 매핑 (맞힌 개수: 순위)
    const rank = {6: 1, 5: 2, 4: 3, 3: 4, 2: 5};

    // 알아볼 수 없는 번호의 개수를 카운트
    const unknownCount = lottos.filter(num => num === 0).length;

    // 맞힌 번호의 개수를 카운트
    const matchCount = lottos.filter(num => win_nums.includes(num)).length;

    // 최고 순위와 최저 순위 계산
    const maxRank = rank[matchCount + unknownCount] || 6;
    const minRank = rank[matchCount] || 6;

    return [maxRank, minRank];
}
