function bouncingBall(h,  bounce,  window) {
    if((h>0) && (bounce > 0) && (bounce < 1) && (window < h)){
      let hOfBounce = h * bounce;
      let count = h > window ? 1 : 0;
      while(hOfBounce > window) {
        count += 1;
        console.log(hOfBounce)
        console.log(hOfBounce > window)
        if(hOfBounce > window){
          count +=1;
        }
        hOfBounce *= bounce; 
      } ;  
      return count;
    } else{
      return -1
    }
  }

console.log(bouncingBall(2, 0.5, 1));