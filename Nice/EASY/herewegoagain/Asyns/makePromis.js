function getJSON(url) {
    return fetch(url).then(response => response.json());
}

function wait(duration) {
    // Create and return a new Promise
    return new Promise((resolve, reject) => { // Thesecontrol the Promise
    // If the argument is invalid, reject the Promise
        if (duration < 0) {
            reject(new Error("Time travel not yet implemented"));
        }
        // Otherwise, wait asynchronously and then resolvethe Promise.
        // setTimeout will invoke resolve() with noarguments, which means
        // that the Promise will fulfill with the undefinedvalue.
        setTimeout(resolve, duration);
        });
    }


  
const http = require("http");

function getJSON(url) {
    // Create and return a new Promise
    return new Promise((resolve, reject) => {
        // Start an HTTP GET request for the specified URL
        request = http.get(url, response => { // called when response starts
            // Reject the Promise if the HTTP status is wrong
            if (response.statusCode !== 200) {
                reject(new Error(`HTTP status ${response.statusCode}`));
                response.resume();  // so we don't leak memory
            }
            // And reject if the response headers are wrong
            else if (response.headers["content-type"] !== "application/json") {
                reject(new Error("Invalid content-type"));
                response.resume();  // don't leak memory
            }
            else {
                // Otherwise, register events to read the body of the response
                let body = "";
                response.setEncoding("utf-8");
                response.on("data", chunk => { body += chunk; });
                response.on("end", () => {
                    // When the response body is complete, try to parse it
                    try {
                        let parsed = JSON.parse(body);
                        // If it parsed successfully, fulfill the Promise
                        resolve(parsed);
                    } catch(e) {
                        // If parsing failed, reject the Promise
                        reject(e);
                    }
                });
            }
        });
        // We also reject the Promise if the request fails before we
        // even get a response (such as when the network is down)
        request.on("error", error => {
            reject(error);
        });
    });
}    