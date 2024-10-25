function kEl(arrNum,k){
    let sortARr = arrNum.sort((a,b) =>  a - b);
    console.log(sortARr)
    console.log(sortARr[k])
}

kEl([1,4,5,6,23],2)