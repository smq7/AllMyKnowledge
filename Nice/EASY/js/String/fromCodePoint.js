// хз в чому ноє різниця мід чар кодом 
console.log(String.fromCodePoint(42));       // "*"
String.fromCodePoint(65, 90);   // "AZ"
String.fromCodePoint(0x404);    // "\u0404"
String.fromCodePoint(0x2F804);  // "\uD87E\uDC04"
console.log(String.fromCodePoint(194564));   // "\uD87E\uDC04"
console.log(String.fromCodePoint(0x1D306, 0x61, 0x1D307)) // "\uD834\uDF06a\uD834\uDF

var str = "\u0427\u0443\u0434\u043e\u0432\u043e! \u0422\u0435\u043f\u0435\u0440 \u0441\u043f\u0440\u043e\u0431\u0443\u0439 \u0456\u043d\u0448\u0435 \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f."
console.log(str)