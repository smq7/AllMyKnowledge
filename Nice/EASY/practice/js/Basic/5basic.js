let str = "w3resource";
let arrStr = str.split("");
let newStr = "";

for(let i = 0;i < str.length;i++){
    let char = arrStr[arrStr.length-1];
    arrStr.pop();
    newStr += char;
}
console.log(newStr)