function createPost(post) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Post created: ${post}`);
            resolve(post);
        }, 1000);
    });
}

function updateLastUserActivityTime(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const currentTime = new Date();
            console.log(`${user}'s last activity time updated: ${currentTime}`);
            resolve(currentTime);
        }, 1000);
    });
}

async function userAction() {
    try {
        const postPromise = createPost("Hello, world!");
        const activityPromise = updateLastUserActivityTime("User123");

        const [post, lastActivityTime] = await Promise.all([postPromise, activityPromise]);

        console.log(`All promises resolved.`);
        console.log(`Posts created: ${post}`);
        console.log(`Last activity time: ${lastActivityTime}`);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

userAction();
