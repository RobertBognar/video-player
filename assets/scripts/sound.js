//SOUNDS CONTROLS
//VOLUME SECTION
//Updating Volume, Volum Icon, Toggle Mute

function updateVolume() {
    if (video.muted) {
        video.muted = false;
    }

    video.volume = volume.value;
}
volume.addEventListener('input', updateVolume);

function updateVolumeIcon() {
    volumeIcons.forEach((icon) => {
        icon.classList.add('hidden');
    });

    volumeBtn.setAttribute('data-title', 'Mute (m)');

    if (video.muted || video.volume === 0) {
        volumeMute.classList.remove('hidden');
        volumeBtn.setAttribute('data-title', 'Unmute (m)');
    } else if (video.volume > 0 && video.volume <= 0.5) {
        volumeLow.classList.remove('hidden');
    } else {
        volumeHigh.classList.remove('hidden');
    }
}
video.addEventListener('volumechange', updateVolumeIcon);

function toggleMute() {
    video.muted = !video.muted;

    if (video.muted) {
        volume.setAttribute('data-volume', volume.value);
        volume.value = 0;
    } else {
        volume.value = volume.dataset.volume;
    }
}
volumeBtn.addEventListener('click', toggleMute);