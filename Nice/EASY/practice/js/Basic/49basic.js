function x(str){
    let arrStr = str.split("");
    let newStr ="";
    for(let char of arrStr){
        newStr += String.fromCharCode((char.charCodeAt()+1))
    }
    console.log(newStr)
    
}

x("vadim")

// function transform(text) {
//     var s = text.split('');
//     for (var i = 0; i < s.length; i++) {
//         // Caesar cipher
//         switch(s[i]) {
//           case ' ':
//             break;
//           case 'z':
//             s[i] = 'a';
//             break;
//           case 'Z':     // One case you forgot to handle
//             s[i] = 'A';
//             break;
//           default:
//             s[i] = String.fromCharCode(1 + s[i].charCodeAt(0));
//         }

//         // Upper-case vowels
//         switch(s[i]) {
//           case 'a': case 'e': case 'i': case 'o': case 'u':
//             s[i] = s[i].toUpperCase();
//         }
//     }
//     return s.join('');
// }