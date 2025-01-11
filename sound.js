document.getElementById("playButton").addEventListener("click", function() {
    const audio = document.getElementById("song");

    // Ensure the audio starts playing when the button is clicked
    audio.play().then(() => {
      console.log("Audio is playing.");
    }).catch(error => {
      console.log("Autoplay failed: ", error);
    });
  });