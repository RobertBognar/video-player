//Importing HTML Elements & Calling Functions Below
const video = getByid('video');
const videoCtrl = getByid('video-controls');
const playBtn = getByid('play');
const playbackIcons = getSelectorAll('.playback-icons use');
const elapsedTime = getByid('time-elapsed');
const durationTime = getByid('duration');
const progressBar = getByid('progress-bar');
const seek = getByid('seek');
const seekStart = getByid('seek-start');
const volumeBtn = getByid('volume-button');
const volumeIcons = getSelectorAll('.volume-button use');
const volumeMute = getSelector('use[href="#volume-mute"]');
const volumeLow = getSelector('use[href="#volume-low"]');
const volumeHigh = getSelector('use[href="#volume-high"]');
const volume = getByid('volume');
const playbackAnimation = getByid('playback-button');
const fullscreenButton = getByid('fullscreen-button');
const videoContainer = getByid('video-container');
const fullscreenIcons = fullscreenButton.querySelectorAll('use');
const doesVideoWorks = !!document.createElement('video').canPlayType;
const zeroFiveButton = getByid('zerofive');
const zeroSevenFiveButton = getByid('zerosevenfive');
const normalSpeedButton = getByid('normal');
const oneFiveButton = getByid('onefive');
const doubleSpeedButton = getByid('double');
const rateButtons = getByid('rate');
const playbackDiv = getByid('playback');
const buttons = getByid('rate-buttons');
document.querySelector('body').reset();
//Defining getElementById, querySelector & querySelectorAll through function for code shortening
function getByid(param) {
    return document.getElementById(`${param}`);
}

function getSelector(param) {
    return document.querySelector(`${param}`);
}

function getSelectorAll(param) {
    return document.querySelectorAll(`${param}`);
}