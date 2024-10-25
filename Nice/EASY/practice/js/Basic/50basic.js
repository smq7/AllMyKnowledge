function x(str){
    let arrStr = str.split(" ");
    let newEl = ""
    for(let i = 0; i < arrStr.length; i++){
        newEl = arrStr[i][0].toUpperCase() + arrStr[i].substring(1,arrStr[0].length);
        arrStr[i] = newEl;
    }
    console.log(arrStr)
}

x("vadim dfaf")