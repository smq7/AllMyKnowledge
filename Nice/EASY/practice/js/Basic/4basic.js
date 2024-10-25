
//площа трикутника з сторонами 5 6 7
let triangle = [5,6,7];
let p = 0;
for(let i = 0; i < triangle.length; i++){
    p +=(triangle[i]/2) 
}

let vay = Math.sqrt(p*((p-triangle[0])*(p-triangle[1])*(p-triangle[2])));
console.log(p)
console.log(vay)
