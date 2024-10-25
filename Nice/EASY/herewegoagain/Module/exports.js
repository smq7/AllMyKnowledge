// const sum = (x, y) => x + y;
// const square = x => x * x;
// exports.mean = data => data.reduce(sum)/data.length;
// exports.stddev = function(d) {
//     let m = exports.mean(d);
//     return Math.sqrt(d.map(x => x -m).map(square).reduce(sum)/(d.length-1));
// };
/////////////////////////////////////////////////////////////////////////////
const sum = (x, y) => x + y;
const square = x => x * x;
const mean = data => data.reduce(sum)/data.length;
const stddev = d => {
let m = mean(d);
return Math.sqrt(d.map(x => x -
m).map(square).reduce(sum)/(d.length-1));
};
// Now export only the public ones
module.exports = { mean, stddev };
