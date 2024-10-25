let str = "dsPy";

function Py(str){
    if(!(str.startsWith("Py"))){
        let newStr = "Py" + str;
        return newStr
    } else{
        return str;
    }
}
console.log(Py(str))