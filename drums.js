



function playSound(e) {
    // Get element that matches the key pressed
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; // Stop function from running all together

    audio.currentTime = 0; // Rewind the audio
    audio.play();
    key.classList.add('playing');
}

// Removes the transition effect 
function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip if it is not a transform
    this.classList.remove('playing');
}

// Listening on each key for when the CSS transition ends
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// We will listen to the event of the keys pressed
window.addEventListener('keydown', playSound);