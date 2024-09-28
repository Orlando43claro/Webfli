const videoPlayer = document.getElementById('videoPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const muteBtn = document.getElementById('muteBtn');
const volumeSlider = document.getElementById('volumeSlider');

// Reproducir o pausar el video
playPauseBtn.addEventListener('click', function() {
    if (videoPlayer.paused) {
        videoPlayer.play();
        playPauseBtn.textContent = 'Pausar';
    } else {
        videoPlayer.pause();
        playPauseBtn.textContent = 'Reproducir';
    }
});

// Silenciar o activar el sonido
muteBtn.addEventListener('click', function() {
    if (videoPlayer.muted) {
        videoPlayer.muted = false;
        muteBtn.textContent = 'Silenciar';
    } else {
        videoPlayer.muted = true;
        muteBtn.textContent = 'Activar sonido';
    }
});

// Ajustar el volumen
volumeSlider.addEventListener('input', function() {
    videoPlayer.volume = volumeSlider.value;
});