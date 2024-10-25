function pair(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length;i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[j] % arr[i] === 0 && i !== j ){
                let obj = {
                    first: arr[i],
                    second: arr[j]
                };
                newArr.push(obj);
            }
        }   
    }
    console.log(newArr);
}

pair([2,4,16])