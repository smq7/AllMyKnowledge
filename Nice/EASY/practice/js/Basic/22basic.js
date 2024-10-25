function str(str,numOfChar){
    let newStr = str.substring(0,numOfChar) + str.substring(numOfChar+1,str.lenght); 
    console.log(newStr)
}

str("string",3)