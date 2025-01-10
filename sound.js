// audio

window.addEventListener('load', function() {

    const audio = document.createElement('audio');
    audio.src = './rain-sound.mp3'; 
    audio.autoplay = true; 
    audio.loop = true; 
    audio.style.display = 'none'; 

    document.body.appendChild(audio);

    audio.play().catch(error => {
      console.log('Autoplay is blocked. User interaction required:', error);
    });
  });
