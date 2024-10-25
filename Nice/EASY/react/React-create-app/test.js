function isValidWalk(walk) {
    let wert = 0;
    let horizon = 0;
    if(walk.length === 10){
      walk.forEach((el) => {
        console.log(el, wert,horizon);
        if(el === "n"){
          wert += 1;
        }
        if(el === "s"){
          wert -= 1;
        }
        if(el ==="e"){
          horizon += 1;
        }
        if(el ==="w"){
          horizon -= 1;
        }
      })
      
      if(horizon ===0 && wert === 0){
        // console.log(true)
        return true;
      }
      else {
        // console.log(false)
          return false;
      }
    }
    return false
  }

  isValidWalk(['n','s','n','s','n','s','n','s','n','s']);