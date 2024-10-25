function x(str){
    if(str.length < 3){
        console.log(str.toUpperCase())
    } else {
        let s = str.substring(0,3).toLowerCase();
        console.log(s + str.substring(3,str.length))
    }
}

x("vSDdffdLF")