const pageItems = {
   keys: document.querySelectorAll('.key')
}

function playSound(e) {
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
   if(!audio) { // stop function on unassigned keys
      return;
   }
   audio.currentTime = 0;
   audio.play();
   key.classList.add('playing');
}

function play() {
   const code = this.dataset.key;
   const audio = document.querySelector(`audio[data-key="${code}"]`);
   const key = document.querySelector(`.key[data-key="${code}"]`);

   audio.currentTime = 0;
   audio.play();
   key.classList.add('playing');
}

function removeTransition(e) {
   if (e.propertyName !== 'transform') return; // skip if not a transform
   this.classList.remove('playing');
}

window.addEventListener('keydown', playSound);
pageItems.keys.forEach(key => key.addEventListener('click', play))
pageItems.keys.forEach(key => key.addEventListener('transitionend', removeTransition));