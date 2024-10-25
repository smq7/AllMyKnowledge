// Declaring a function async means that the return value of the function
// will be a Promise even if no Promise-related code appears in the body
// of the function
async function getHighScore() {
    let response = await fetch("/api/user/profile");
    let profile = await response.json();
    return profile.highScore;
    }