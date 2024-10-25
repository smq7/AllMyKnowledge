// вирізає строку від першого заданого числа до останього 
// не міняє задану строку
let str1 = 'Приближается утро.';
let str2 = str1.slice(1, 8);
let str3 = str1.slice(4, -2);
let str4 = str1.slice(12);
let str5 = str1.slice(30);
let str6 = str1.slice(0,-3);
console.log(str1.slice(str1.length-3,str1.length));
console.log(str1.slice(5,9));
console.log(str2); // ВЫВОД: риближа
console.log(str3); // ВЫВОД: лижается утр
console.log(str4); // ВЫВОД:  утро.
console.log(str5);
let str = 'Приближается утро.';
str.slice(-3);     // вернёт 'ро.'