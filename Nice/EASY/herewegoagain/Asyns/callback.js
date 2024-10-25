const https = require("https");
// Read the text content of the URL and asynchronously passit to the callback.
function getText(url, callback) {
// Start an HTTP GET request for the URL
request = https.get(url);
// Register a function to handle the "response" event.
request.on("response", response => {
// The response event means that response headershave been received
let httpStatus = response.statusCode;
// The body of the HTTP response has not beenreceived yet.
// So we register more event handlers to to be calledwhen it arrives.
response.setEncoding("utf-8"); // We're expectingUnicode text
let body = ""; // which we will accumulate here.
// This event handler is called when a chunk of the body is ready
response.on("data", chunk => { body += chunk; });
// This event handler is called when the response is complete
response.on("end", () => {
if (httpStatus === 200) { // If the HTTPresponse was good
callback(null, body); // Pass response bodyto the callback
} else { // Otherwise pass an
error
callback(httpStatus, null);
}
});
});
// We also register an event handler for lower-levelnetwork errors
request.on("error", (err) => {
callback(err, null);
});
}