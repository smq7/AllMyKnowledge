let url = new URL("https://example.com:8000/path/name?q=term#fragment");
url.href // => "https://example.com:8000/path/name?q=term#fragment"
url.origin // => "https://example.com:8000"
url.protocol // => "https:"
url.host // => "example.com:8000"
url.hostname // => "example.com"
url.port // => "8000"
url.pathname // => "/path/name"
url.search // => "?q=term"
url.hash // => "#fragment"
let clock = setInterval(() => {
    console.clear();
    console.log(new Date().toLocaleTimeString());
    }, 1000);
    // After 10 seconds: stop the repeating code above.
    setTimeout(() => { clearInterval(clock); }, 10000);
    