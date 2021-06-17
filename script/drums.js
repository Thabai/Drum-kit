
function playSounds(e) {
    // Get element that matches the key pressed
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    if (!audio) return; // Stop function from running all together
    this.playSound(audio.id);

}
function bigSmall(e) {
    if (!e) return;
    e.style.transform = "scale(1.1)";
    setTimeout(function() {
        e.style.transform = "scale(1)"; 
    }, 100);
}

function playSound(part) {
    
    const sound = document.getElementById(part);
    const pic = document.getElementById('pic-'+part);
    const key = document.getElementById('key-'+part);

    this.bigSmall(key);
    this.bigSmall(pic);
    
    sound.currentTime = 0;
    sound.play();
  
}


// We will listen to the event of the keys pressed
window.addEventListener('keydown', playSounds);
window.addEventListener ('click', playSound);

