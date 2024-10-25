let a = function(arr, arrindex) {
    let resultArr = [];
    for(let i = 0; i < arrindex.length; i++){
        resultArr.push(arr[arrindex[i]]);
    }
    console.log(resultArr);
}

a(['a', 'b', 'c', 'd', 'e', 'f'],[1,3]);