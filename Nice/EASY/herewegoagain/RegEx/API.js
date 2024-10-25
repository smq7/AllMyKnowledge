"JavaScript".search(/script/ui) // => 4


// No matter how it is capitalized, replace it with thecorrect capitalization
let x = "javascript";
x = x.replace(/javascript/gi, "JavaScript");

let quote = /"([^"]*)"/g;
// Replace the straight quotation marks with guillemets
// leaving the quoted text (stored in $1) unchanged.
'He said "stop"'.replace(quote, '«$1»') // => 'He said

"7 plus 8 equals 15".match(/\d+/g) // => ["7", "8", "15"]

// let url = /(\w+):\/\/([\w.]+)\/(\S*)/;
// let text = "Visit my blog at http://www.example.com/~david";
// let match = text.match(url);
// let fullurl, protocol, host, path;
// if (match !== null) {
// fullurl = match[0]; // fullurl ==
// "http://www.example.com/~david"
// protocol = match[1]; // protocol == "http"
// host = match[2]; // host == "www.example.com"
// path = match[3]; // path == "~david"
// }


let url = /(?<protocol>\w+):\/\/(?<host>[\w.]+)\/(?<path>\S*)/;
let text = "Visit my blog at http://www.example.com/~david";
let match = text.match(url);
match[0] // => "http://www.example.com/~david"
match.input // => text
match.index // => 17
match.groups.protocol // => "http"
match.groups.host // => "www.example.com"
match.groups.path // => "~david"

// let pattern = /Java/g;
// let text = "JavaScript > Java";
// let match;
// while((match = pattern.exec(text)) !== null) {
// console.log(`Matched ${match[0]} at ${match.index}`);
// console.log(`Next search begins at
// ${pattern.lastIndex}`);
// }