let o = {s: "test", n: 0};
JSON.stringify(o, null, 2)
JSON.parse(JSON.stringify(o, null, 2))

console.assert(0,"vad");
console.dir(o)