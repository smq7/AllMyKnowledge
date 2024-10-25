function ever(arr,nth){
    return arr.filter((e, i) => i % nth === nth - 1);
    // return  arr.map((v,i) => {
    //     if(i%n){
    //         return v;
    //     } 
    // })
}

console.log(ever([1,2,3,4],2));