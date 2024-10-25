function a(str1,str2){
    if(str1.length === str2.length){
        console.log(str1.concat(str2))
        return 
    } else if(str1.length > str2.length){
        str1 = str1.slice(0,str2.length);
        console.log(str1)
    } else if(str2.length > str1.length){
        str2 = str2.slice(0,str1.length);
        console.log(str2)
    } 
    console.log(str1.concat(str2))

}
a("vadim","semensd");