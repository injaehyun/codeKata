function solution(price, money, count) {
    var totalCost = 0;
    for(let i = 1; i <= count; i++){
        totalCost += i * price;
    }

    var shortfall = totalCost - money;
    return shortfall > 0 ? shortfall : 0;
}
