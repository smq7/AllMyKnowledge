function everyPair(arr,anotherArr){
    let returlArr = [];
    let tempArr = [];
    arr.forEach(element => {
        tempArr[0] = element;
        anotherArr.forEach(el =>{
           tempArr[1] = el;
           returlArr.push(tempArr.join(" ")); 
        })
    });
    return returlArr;
}
// const xProd = (a, b) => a.reduce((acc, x) => acc.concat(b.map(y => [x, y])), []);

console.log([].concat("vad"))

