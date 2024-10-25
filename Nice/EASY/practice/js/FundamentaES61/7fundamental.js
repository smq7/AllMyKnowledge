function convert(num){
    return num.toString().split("").map((v) => v*1);
}

console.log(convert("2321321"));