// тоже регулярпки
const regexp = RegExp('foo*','g');
const str = 'table football, foosball';
let matches = str.matchAll(regexp);

for (const match of matches) {
  console.log(match);
}
// Array [ "foo" ]
// Array [ "foo" ]

// итерация больше недоступна после вызова for of
// Для создания нового итератора вызовите matchAll повторно
matches = str.matchAll(regexp);

Array.from(matches, m => m[0]);
// Array [ "foo", "foo" ]