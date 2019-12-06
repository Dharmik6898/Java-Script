function playing(e){
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    
    


    if (audio == null) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

function mobileclick(e){
  const key = e.path[1];
  const audio = document.querySelector(`audio[data-key="${key.getAttribute('data-key')}"]`);
  if (audio == null) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}


var keys = Array.from(document.querySelectorAll('.key'));


keys.forEach(key => key.addEventListener("transitionend", removeTransition));
keys.forEach(key => key.addEventListener("click", mobileclick));
window.addEventListener("keydown",playing)


