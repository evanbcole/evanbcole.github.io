// autoplay music on click
document.addEventListener('click', musicPlay);
function musicPlay() {
    document.getElementById('music').play();
    document.getElementById('music').volume = 0.1;
    document.removeEventListener('click', musicPlay);
}

// pause music button
document.getElementById('mute').addEventListener('click', pauseMusic);
function pauseMusic() {
    document.getElementById('music').pause();
}

// play music button
document.getElementById('play').addEventListener('click', playMusic);
function playMusic() {
    document.getElementById('music').play();
    document.getElementById('music').volume = 0.1;
}

// Get the modal
var modal = document.getElementById("myModal");
var container = document.getElementById("myContainer");


// When the user clicks on the button, open the modal
window.onload = function() {
  modal.style.display = "block";
  document.getElementsByClassName("mainContainer")[0].style.WebkitFilter = 'blur(4px)';
  document.getElementsByClassName("mainContainer")[0].style.filter= 'blur(4px)';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.getElementsByClassName("mainContainer")[0].style.WebkitFilter = 'blur(0px)';
    document.getElementsByClassName("mainContainer")[0].style.filter= 'blur(0px)';
  }

  else {
    modal.style.display = "none";
    document.getElementsByClassName("mainContainer")[0].style.WebkitFilter = 'blur(0px)';
    document.getElementsByClassName("mainContainer")[0].style.filter= 'blur(0px)';
  }
} 