class HTTPError extends Error {
    constructor(status, statusText, url) {
        super(`${status} ${statusText}: ${url}`);
        this.status = status;
        this.statusText = statusText;
        this.url = url;
    }
    get name() { return "HTTPError"; }
}
    let error = new HTTPError(404, "Not Found",
    "http://example.com/");
    console.log(error)
    throw error
    error.status // => 404
    error.message // => "404 Not Found:
    http://example.com/"
    error.name // => "HTTPError"