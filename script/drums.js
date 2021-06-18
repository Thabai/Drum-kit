
function playSounds(e) {
    // Get element that matches the key pressed
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    if (!audio) return; // Stop function from running all together
    this.playSound(audio.id);

}
window.addEventListener('keydown', playSounds); 

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


const parts = ['boom', 'clap', 'hihat', 'kick', 'openhat', 'ride', 'snare', 'tink', 'tom'];
for (i= 0; i < parts.length; i++) {
    let part = parts[i];
    
    pic= document.getElementById('pic-'+part);
    if (pic) {
        pic.addEventListener('click', function(){
            playSound(part);
        });
    }
    key = document.getElementById('key-'+part);
    key.addEventListener('click', function(){
            playSound(part);
       
   });
}
