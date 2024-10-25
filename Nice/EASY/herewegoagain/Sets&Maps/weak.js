let john = { name: "Іван" };
let va = {va: "vad"};

let weakMap = new WeakMap();
let mam = new Map();

mam.set(va,"...");

weakMap.set(john, "...");

console.log(weakMap.get(john))
console.log(mam.get(va))
console.log(weakMap)
console.log(mam)

john = null; // перезапишемо посилання
va = null
console.log(weakMap.get(john))
console.log(mam.get(va))
console.log(weakMap)
console.log(mam)
// john видалено з пам’яті!
// m.set(obj,"vad")
