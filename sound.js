document.getElementById("playButton").addEventListener("click", function() {
    const audio = document.getElementById("song");
    audio.play().catch(error => {
      console.log("Autoplay failed: ", error);
    });
  });