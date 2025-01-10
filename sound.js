window.addEventListener('load', () => {
    const audio = document.getElementById('background-music');
    audio.play().catch(error => {
      console.log('Autoplay failed. Attempting with user interaction.');
    });

    document.body.addEventListener('click', () => {
      audio.muted = false;
      audio.play();
    });
  });