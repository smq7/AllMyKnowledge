function vectorAdd({x: x1, y: y1},{x: x2, y: y2})
    {
    return { x: x1 + x2, y: y1 + y2 };
    }
// {K:x,Y:y} = obj;
let {x,y} = vectorAdd({x: 1, y: 2}, {x: 3, y: 4}); 
console.log(x,y)