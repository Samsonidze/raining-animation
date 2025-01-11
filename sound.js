window.addEventListener('load', () => {
    // Wait for user interaction before playing the audio
    document.body.addEventListener('click', () => {
      const audio = document.getElementById("song");
      audio.play().catch(error => {
        console.log("Autoplay failed: ", error);
      });
    });
  });