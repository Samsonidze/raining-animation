function rain(){
    let cloud = document.querySelector(".cloud");
    let e = document.createElement("div");

    e.classList.add("drop");
    cloud.appendChild(e)
    let left = Math.floor(Math.random() * 310)
    let width = Math.random() * 5
    let height = Math.random() * 50
    let duration = Math.random() * 0.5


    setTimeout(function(){
        cloud.removeChild(e)
    },2000)
    e.style.left = left + "px";
    e.style.width = 0.5 + width + "px"
    e.style.height = 0.5 + height + "px"
    e.style.animationDuration = 1 + duration + "s"


}

setInterval(function(){
    rain()
},20)


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

