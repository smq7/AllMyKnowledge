function a(colection,callback) {
    return colection.every(callback);
}

console.log(a([1,2,3,4,5], (a) => a > 4));