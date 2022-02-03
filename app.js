startBtn.addEventListener("click", () => {
  startMenu.classList.toggle("dnone");
});

document.addEventListener('click', e => {
  if (e.target.closest('#startMenu') || e.target.closest('#startBtn')) return;

  startMenu.classList.add('dnone');
})

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

// Drag'n'drop

const appWindow = document.querySelector(".appWindow");

let dragged = false;

document.addEventListener("mousedown", (e) => {
  if (!e.target.classList.contains("appWindowHeader")) return;

  dragged = true;
});

document.addEventListener("mouseup", (e) => {
  dragged = false;
});

document.addEventListener("mousemove", (e) => {
  if (!dragged) return;

  console.log(e)

  dragndrop(appWindow, e);
});

function dragndrop(el, e) {
  let currX = parseInt(window.getComputedStyle(el).left);
  let currY = parseInt(window.getComputedStyle(el).top);

  if (el.getBoundingClientRect().left < 0) {
    currX = 0;
  } else {
    currX += e.movementX;
  }
  if (el.getBoundingClientRect().top < 0) {
    currY = 0;
  } else {
    currY += e.movementY;
  }

  currY += e.movementY;
  el.style.left = currX + "px";
  el.style.top = currY + "px";
}

// Right click

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();



  contextualMenu.style.left = e.x + "px";
  contextualMenu.style.top = e.y + "px";
  contextualMenu.classList.remove("dnone");
});

document.addEventListener("click", (e) => {
  contextualMenu.classList.add("dnone");

});
