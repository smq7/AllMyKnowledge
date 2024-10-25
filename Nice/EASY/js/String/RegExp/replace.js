// тоде регулярки

function replacer(match, p1, p2, p3, offset, string) {
    // p1 - не цифры, p2 - цифры, p3 - не буквы и не цифры
    return [p1, p2, p3].join(' - ');
  }
  var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString)