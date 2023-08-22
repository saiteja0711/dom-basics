function createPost(post) {
    // Simulate post creation by returning a resolved promise after a delay
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Post created: ${post}`);
            resolve(post);
        }, 1000); // Simulate post creation taking 1 second
    });
}

function updateLastUserActivityTime(user) {
    // Simulate updating user's last activity time by returning a resolved promise after a delay
    return new Promise((resolve) => {
        setTimeout(() => {
            const currentTime = new Date();
            console.log(`${user}'s last activity time updated: ${currentTime}`);
            resolve(currentTime);
        }, 1000); // Simulate updating user's activity time taking 1 second
    });
}

// Simulating the user's action: creating a post and updating last activity time
function userAction() {
    const postPromise = createPost("Hello, world!");
    const activityPromise = updateLastUserActivityTime("User123");

    Promise.all([postPromise, activityPromise])
        .then(([post, lastActivityTime]) => {
            console.log(`All promises resolved.`);
            console.log(`Posts created: ${post}`);
            console.log(`Last activity time: ${lastActivityTime}`);
        })
        .catch((error) => {
            console.error("An error occurred:", error);
        });
}

// Simulate the user's action by calling the function
userAction();