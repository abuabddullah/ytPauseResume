let isPaused = false;
let isActive = true;

function pauseVideo() {
    const video = document.querySelector('video');
    if (video && !video.paused) {
        video.pause();
        isPaused = true;
    }
}

function resumeVideo() {
    const video = document.querySelector('video');
    if (video && isPaused) {
        video.play();
        isPaused = false;
    }
}

// Listen for visibility changes on the tab
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
        pauseVideo();
    } else if (document.visibilityState === 'visible') {
        resumeVideo();
    }
});

// Listen for focus changes on the window
window.addEventListener('focus', () => {
    isActive = true;
    resumeVideo();
});

window.addEventListener('blur', () => {
    isActive = false;
    pauseVideo();
});
