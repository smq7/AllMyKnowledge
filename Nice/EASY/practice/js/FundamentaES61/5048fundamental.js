function time(num){
    return (num < 12) ? num%12 + " am" : num%12 + " pm"; 
}

console.log(time(25));