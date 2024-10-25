function cheak(a,b,str){
    indexA = str.indexOf(a);
    indexB = str.indexOf(b);
    for(let i = 0; i < str.length; i++){
            if(Math.abs(indexA - indexB) === 4){
                console.log("nice"); 
                return
            } else if(indexB - indexA > 4 || indexB - indexA < 4 ){
                if(str.indexOf(a,indexA+1) !== -1){
                    indexA = str.indexOf(a,indexA+1);
                }
                console.log(indexA)
                
            }

            if( indexA > indexB){
                if(indexB !== str.indexOf(b,indexB+1)){
                    indexB = str.indexOf(b,indexB+1);
                }
                console.log(indexB)
            } 
    }
    console.log("BAD");
}

cheak("a","b","vdibmadfdb");