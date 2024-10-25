let regex = /s$/
let pattern = new RegExp("s$");
let r = /\d{2,4}/; // Match between two and four digits
r = /\w{3}\d?/; // Match exactly three word characters and an optional digit
r = /\s+java\s+/; // Match "java" with one or more spacesbefore and after
r = /[^(]*/; // Match zero or more characters that are not open parens
/['"][^'"]*['"]/
// To require the quotes to match, use a reference:
let a = /(['"])[^'"]*\1/

// Символи, що вказують на повторення, 
// завжди відповідають шаблону, до якого вони застосовані.
// {n,m} зустріти попередній шаблон н раз але менше м
// {n,} зустрити н або ібльше раз 
// {n} зустріти н раз
// [] клас тіпа створюється і всьо шо в цих дужках 
// [^] заперечення тіпа вот так /[^abc]/ відповідає всьому кроме abc 
// як один знак працює так сказат /[abc]/ a або b або с  
// також можна делат ренж [a-z] всі малі букви 
// ^ привязує шаблон до початку рядка
// | або тіпа /ab|cd|ef/ або ab або cd або ef 
// якщо якась з цих тєм тіпа співпадає решта ігноруєтьсяється
// () group items into a single unit
// (?:)group items into a single unit, but do not remember the characters that match this group.
// \n повторити ту штуку яка є групою під номером n групи тільки в круглих дужках можуть бути
// $ привязує шаблон до кінця рядка
  