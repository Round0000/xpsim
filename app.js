startBtn.addEventListener("click", () => {
  startMenu.classList.toggle("dnone");
});

bsodToggle.addEventListener("click", () => {
  windows.classList.add("bsod");
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("bsod")) {
    windows.classList.remove("bsod");
  }
});

// Minimize/Maximize/Close window

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("btnWindowMaximize")) {
    e.target.closest(".appWindow").classList.toggle("maximized");
  }
});
