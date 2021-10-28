function keyboardEvent(event) {
    const { key } = event;
    switch (key) {
        case 'k':
            togglePlay();
            playback();
            if (video.paused) {
                showControls();
            } else {
                setTimeout(() => {
                    hideControls();
                }, 2000);
            }
            break;
        case 'm':
            toggleMute();
            break;
        case 'f':
            toggleFullScreen();
            updateFullscreenButton();
            break;
    }
}
document.addEventListener('keyup', keyboardEvent);