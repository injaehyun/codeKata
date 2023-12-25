function solution(absolutes, signs) {
    var answer = 0;
    for(var i=0; i < absolutes.length; i++) {
        if(signs[i] === true){
            answer = answer +absolutes[i];
        } else if (signs[i] === false){
            answer = answer -absolutes[i]

        }


    }

    return answer;
}

var absolutes = [1,2,3]
var signs = [false,false,true]

console.log(solution(absolutes,signs))
