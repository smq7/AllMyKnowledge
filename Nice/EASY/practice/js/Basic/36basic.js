function x(x,y,z){
    // console.log(a.toString().split("")[a.length-1] === b.toString().split("")[a.length-1]);
    
    if ((x > 0) && y > 0 && z > 0)
    {
        console.log(x%10)
     return (x % 10 == y % 10 && y % 10 == z % 10 && x % 10 == z % 10);
     
   }
  else
    return false;
}

x(13432156,42,100);
