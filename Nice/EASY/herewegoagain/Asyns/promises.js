// getJSON("/api/user/profile")
//     .then(displayUserProfile)
//     .catch(handleProfileError);

fetch("/api/user/profile") // Start the HTTP request
    .then(response => { // Call this when status andheaders are ready
        if (!response.ok) { // If we got a 404 Not Found orsimilar error
            return null; // Maybe user is logged out;return null profile
        }
// Now check the headers to ensure that the serversent us JSON.
// If not, our server is broken, and this is aserious error!
        let type = response.headers.get("content-type");
        if (type !== "application/json") {
            throw new TypeError(`Expected JSON, got ${type}`);
        }
// If we get here, then we got a 2xx status and aJSON content-type
// so we can confidently return a Promise for the response
// body as a JSON object.
        return response.json();
    })
    .then(profile => { // Called with the parsedresponse body or null
        if (profile) {
            displayUserProfile(profile);
        }
        else { // If we got a 404 error above and returnednull we end up here
            displayLoggedOutProfilePage();
        }
    })
    .catch(e => {
        if (e instanceof NetworkError) {
        // fetch() can fail this way if the internetonnection is down
            displayErrorMessage("Check your internetconnection.");
        }
        else if (e instanceof TypeError) {
        // This happens if we throw TypeError above
            displayErrorMessage("Something is wrong with ouserver!");
        }
        else {
        // This must be some kind of unanticipated error
            console.error(e);
        }
    });
