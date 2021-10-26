//VIDEO CONTROLS

//Check If Video Plays At All And Remove Hidden Class
if (doesVideoWorks) {
    video.controls = false;
    videoCtrl.classList.remove('hidden');
}

//Toggle Video Play
function togglePlay() {
    if (video.paused || video.ended) {
        video.play();
    } else {
        video.pause();
    }
}
playBtn.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);

//Updating Play Button & Removing Hidden Class, Changing Play/Pause Text Inside by Setting Up Attributes
function playBtnUpdate() {
    playbackIcons.forEach((icon) => icon.classList.toggle('hidden'));

    if (video.paused) {
        playBtn.setAttribute('data-title', 'Play (k)');
    } else {
        playBtn.setAttribute('data-title', 'Pause (k)');
    }
}
video.addEventListener('play', playBtnUpdate);
video.addEventListener('pause', playBtnUpdate);

//Formatting Time For Progress Bar & Time
function formatTime(timeInSeconds) {
    const result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);

    return {
        minutes: result.substr(3, 2),
        seconds: result.substr(6, 2),
    };
}

//Initializing Video, Max Time & Progress Bar
function initializeVideo() {
    const videoDuration = Math.round(video.duration);
    seek.setAttribute('max', videoDuration);
    progressBar.setAttribute('max', videoDuration);
    const time = formatTime(videoDuration);
    durationTime.innerText = `${time.minutes}:${time.seconds}`;
    durationTime.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`);
}
video.addEventListener('loadedmetadata', initializeVideo);

//Updating Time That Is Elapsed In Video
function timeElapsedUpdated() {
    const time = formatTime(Math.round(video.currentTime));
    elapsedTime.innerText = `${time.minutes}:${time.seconds}`;
    elapsedTime.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`);
}
video.addEventListener('timeupdate', timeElapsedUpdated);

//Progress Bar Update
function progressUpdate() {
    seek.value = Math.floor(video.currentTime);
    progressBar.value = Math.floor(video.currentTime);
}
video.addEventListener('timeupdate', progressUpdate);

//Skip To & Skip Ahead Function For Clicking On Progress Bar
function updateSeekStart(e) {
    const skipTo = Math.round(
        (e.offsetX / e.target.clientWidth) *
        parseInt(e.target.getAttribute('max'), 10)
    );
    seek.setAttribute('data-seek', skipTo);
    const t = formatTime(skipTo);
    seekStart.textContent = `${t.minutes}:${t.seconds}`;
    const rect = video.getBoundingClientRect();
    seekStart.style.left = `${e.pageX - rect.left}px`;
}
seek.addEventListener('mousemove', updateSeekStart);

function skipAhead(e) {
    const skipTo = e.target.dataset.seek
        ? e.target.dataset.seek
        : e.target.value;
    video.currentTime = skipTo;
    progressBar.value = skipTo;
    seek.value = skipTo;
}
seek.addEventListener('input', skipAhead);

function playback() {
    playbackAnimation.animate(
        [
            {
                opacity: 1,
                transform: 'scale(1)',
            },
            {
                opacity: 0,
                transform: 'scale(1.3)',
            },
        ],
        {
            duration: 500,
        }
    );
}
video.addEventListener('click', playback);

//FULLSCREEN MODE Toggle, Updating Button
function toggleFullScreen() {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else if (document.webkitFullscreenElement) {
        document.webkitExitFullscreen();
    } else if (videoContainer.webkitRequestFullscreen) {
        videoContainer.webkitRequestFullscreen();
    } else {
        videoContainer.requestFullscreen();
    }
}
fullscreenButton.addEventListener('click', toggleFullScreen);

function updateFullscreenButton() {
    fullscreenIcons.forEach((icon) => icon.classList.toggle('hidden'));

    if (document.fullscreenElement) {
        fullscreenButton.setAttribute('data-title', 'Full screen (f)');
    } else {
        fullscreenButton.setAttribute('data-title', 'Exit full screen (f)');
    }
}
videoContainer.addEventListener('fullscreenchange', updateFullscreenButton);
fullscreenButton.addEventListener('click', updateFullscreenButton);

//Hide Or Show Controls Depends On If We Are Using them
function hideControls() {
    if (video.paused) {
        return;
    }

    videoCtrl.classList.add('hide');
}
video.addEventListener('mouseleave', hideControls);
videoCtrl.addEventListener('mouseleave', hideControls);

function showControls() {
    videoCtrl.classList.remove('hide');
}
video.addEventListener('mouseenter', showControls);
videoCtrl.addEventListener('mouseenter', showControls);