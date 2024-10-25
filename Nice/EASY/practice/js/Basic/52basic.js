let str = "Python";
function conv(str){
    let alfStr = str.split("").sort().join("");
    console.log(alfStr);
}
conv(str)