const gymnopedie = new Audio("./assets/audio/gymnopedie.mp3");

let playing = false;

document.addEventListener("click", (e) => {
  const music = document.querySelector("audio");

  if (playing && e.target.classList.contains("wmp_controls_play")) {
    playing = !playing;
    music.pause();
    wmpviz.pause();
  } else if (e.target.classList.contains("wmp_controls_play")) {
    playing = !playing;
    music.play();
    wmpviz.play();
  }
});
