// виводить юникод букви/знаку 
console.log('ABC'.charCodeAt(0));
console.log(knownCharCodeAt("vadim",0));

function knownCharCodeAt(str, idx) {
    str += '';
    var code,
        end = str.length;
  
    var surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    while ((surrogatePairs.exec(str)) != null) {
      var li = surrogatePairs.lastIndex;
      if (li - 2 < idx) {
        idx++;
      }
      else {
        break;
      }
    }
  
    if (idx >= end || idx < 0) {
      return NaN;
    }
  
    code = str.charCodeAt(idx);
  
    var hi, low;
    if (0xD800 <= code && code <= 0xDBFF) {
      hi = code;
      low = str.charCodeAt(idx + 1);
      // Перешагиваем через один, поскольку один «символ» является частью суррогатной пары
      return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
    }
    return code;
  }