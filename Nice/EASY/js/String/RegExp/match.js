// регулярки тут работают 
var str = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЬЫЪЭЮЯабвгдеёжзийклмнопрстуфхцчшщьыъэюя';
var regexp = /[А-Д]/gi;
var matches_array = str.match(regexp);

console.log(matches_array);
// ['А', 'Б', 'В', 'Г', 'Д', 'а', 'б', 'в', 'г', 'д']