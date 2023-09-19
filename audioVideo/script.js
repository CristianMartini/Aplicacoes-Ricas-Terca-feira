const video = document.getElementById('video');
const playVideoBtn = document.getElementById('play-video');
playVideoBtn.addEventListener('click', function () {
    video.play()

});
const pauseVideoBtn = document.getElementById('pause-video');
pauseVideoBtn.addEventListener('click', function () {
    video.pause()
});

const backVideoBtn = document.getElementById('back-video');
backVideoBtn.addEventListener('click', function () {
    video.currentTime -= 10;
});
const advancedVideoBtn = document.getElementById('advanced-video');
advancedVideoBtn.addEventListener('click', function () {
    video.currentTime += 10;
});
const mutedVideoBtn = document.getElementById('mute-video');
mutedVideoBtn.addEventListener('click', function () {
    video.muted = !video.muted;
});
//função utilizada para exibir o elemento de vídeo em tela cheia no navegador
const fullscreenVideoBtn = document.getElementById('fullscreen-video');
fullscreenVideoBtn.addEventListener('click', function () {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
    }
});
/*funçao para audio */
const audio = document.getElementById('audio');
const playaudioBtn = document.getElementById('play-audio');
playaudioBtn.addEventListener('click', function () {
    audio.play()

});
const pauseaudioBtn = document.getElementById('pause-audio');
pauseaudioBtn.addEventListener('click', function () {
    audio.pause()
});

const backAudioBtn = document.getElementById('back-audio');
backAudioBtn.addEventListener('click', function () {
    audio.currentTime -= 10;
});
const advancedAudioBtn = document.getElementById('advanced-audio');
advancedAudioBtn.addEventListener('click', function () {
    audio.currentTime += 10;
});
const mutedAudioBtn = document.getElementById('mute-audio');
mutedAudioBtn.addEventListener('click', function () {
    audio.muted = !audio.muted;
});

const fullscreenAudioBtn = document.getElementById('fullscreen-audio');
fullscreenAudioBtn.addEventListener('click', function () {
    if (audio.requestFullscreen) {
        audio.requestFullscreen();
    } else if (audio.mozRequestFullScreen) {
        audio.mozRequestFullScreen();
    } else if (audio.webkitRequestFullscreen) {
        audio.webkitRequestFullscreen();
    } else if (audio.msRequestFullscreen) {
        audio.msRequestFullscreen();
    }
});
