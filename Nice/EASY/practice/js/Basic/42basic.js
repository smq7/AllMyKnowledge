function cheak(x,y,z){
    if(x <= y && y <= z ){
        console.log("nice")
    } else{
        console.log("bad")
    }
    
}

// cheak(1231,14,31);
function same_last_digit(p, q, r) {
    return (p % 10 === q % 10) ||
           (p % 10 === r % 10) ||
           (q % 10 === r % 10);
           
}

