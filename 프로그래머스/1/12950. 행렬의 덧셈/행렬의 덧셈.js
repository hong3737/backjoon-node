function solution(arr1, arr2) {
    let answer=[];
    for(let i in arr1){
        answer[i] = [];
        for(let j in arr1[i]){
            answer[i].push(arr1[i][j] + arr2[i][j]);
        }
    }
    return answer;
}