// цельсійв фаренгейм 
function convertCinF(temperature, cf){
    if(cf === "f"){
        let c = (temperature-32)/9*5
        console.log(c + "C")
    } else if( cf === "c"){
        let f = temperature/5*9+32;
        console.log(f + "F")
    }
}

convertCinF(60,"c");