<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Music Player</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="music-player">
        <h1>Music Player</h1>
        <audio id="audio" src="song1.mp3" preload="metadata"></audio>
        <div class="track-info">
            <p id="track-title">Track Title</p>
            <p id="track-artist">Artist Name</p>
        </div>
        <div class="controls">
            <button id="prev" class="control-button">Prev</button>
            <button id="play" class="control-button">Play</button>
            <button id="next" class="control-button">Next</button>
        </div>
        <div class="progress-container">
            <input type="range" id="progress" value="0" max="100">
        </div>
        <div class="volume-container">
            <label for="volume">Volume:</label>
            <input type="range" id="volume" value="100" max="100">
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #2c3e50;
    font-family: 'Arial', sans-serif;
}

.music-player {
    background: #ecf0f1;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    width: 300px;
}

.track-info {
    margin: 15px 0;
}

.controls {
    display: flex;
    justify-content: center;
    margin: 15px 0;
}

.control-button {
    background: #3498db;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px;
    margin: 0 5px;
    cursor: pointer;
    transition: background 0.3s;
}

.control-button:hover {
    background: #2980b9;
}

.progress-container {
    margin: 15px 0;
}

input[type="range"] {
    width: 100%;
}

.volume-container {
    margin-top: 15px;
}

const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const progress = document.getElementById('progress');
const volume = document.getElementById('volume');
const trackTitle = document.getElementById('track-title');
const trackArtist = document.getElementById('track-artist');

// Sample tracks
const tracks = [
    {
        title: "Track 1",
        artist: "Artist 1",
        src: "song1.mp3"
    },
    {
        title: "Track 2",
        artist: "Artist 2",
        src: "song2.mp3"
    },
    {
        title: "Track 3",
        artist: "Artist 3",
        src: "song3.mp3"
    }
];

let currentTrackIndex = 0;

// Load track
function loadTrack(index) {
    const track = tracks[index];
    audio.src = track.src;
    trackTitle.textContent = track.title;
    trackArtist.textContent = track.artist;
    audio.load(); // Load new track
}

// Play or pause the audio
function togglePlay() {
    if (audio.paused) {
        audio.play();
        playButton.textContent = "Pause";
    } else {
        audio.pause();
        playButton.textContent = "Play";
    }
}

// Play the next track
function playNext() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
    playButton.textContent = "Pause";
}

// Play the previous track
function playPrev() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
    playButton.textContent = "Pause";
}

// Update progress bar
audio.addEventListener('timeupdate', () => {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progress.value = progressPercent;
});

// Seek track
progress.addEventListener('input', () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
});

// Volume control
volume.addEventListener('input', () => {
    audio.volume = volume.value / 100;
});

// Event listeners
playButton.addEventListener('click', togglePlay);
nextButton.addEventListener('click', playNext);
prevButton.addEventListener('click', playPrev);

// Load the first track
loadTrack(currentTrackIndex);
