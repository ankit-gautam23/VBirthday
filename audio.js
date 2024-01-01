// Create a variable to store the audio element
let audioPlayer = null;

function playSong(song) {
    // Check if there's an existing audio element
    if (audioPlayer) {
        // Pause and reset the current audio
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    }

    // Create a new audio element
    audioPlayer = new Audio(song);

    // Add an event listener to play the next song when the current one ends
    audioPlayer.addEventListener('ended', function() {
        // Set the audioPlayer variable to null after the song ends
        audioPlayer = null;
    });

    // Play the new song
    audioPlayer.play();
}
