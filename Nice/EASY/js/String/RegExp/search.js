// тоже регялярки 
function testInput(re, str) {
    var midstring;
    if (str.search(re) != -1) {
      midstring = ' содержит ';
    } else {
      midstring = ' не содержит ';
    }
    console.log(str + midstring + re);
  }
  
  var testString  = 'hey JuDe';
  var re = /[A-Z]/g;
  
  testInput(re, testString); // выведет: hey Jude содержит /[A-Z]/g