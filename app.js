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
  if (e.target.classList.contains("btnWindowClose")) {
    const app = e.target.closest(".appWindow");
    app.classList.add("dnone");
    taskbar.querySelector(`.openedAppTab[data-app="${app.dataset.app}"]`).remove();
    setActiveWindow(document.querySelector('.appWindow:last-of-type'));
  }
});

// Drag'n'drop

let dragged = false;
let currentlyDragged;

document.addEventListener("mousedown", (e) => {
  if (!e.target.classList.contains("appWindowHeader")) return;

  setActiveWindow(e.target.closest(".appWindow"));
  dragged = true;
  currentlyDragged = e.target.closest(".appWindow");
});

document.addEventListener("mouseup", (e) => {
  dragged = false;
});

document.addEventListener("mousemove", (e) => {
  if (!dragged) return;


  dragndrop(currentlyDragged, e);
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


document.addEventListener("dblclick", e => {
  console.log(e);

  if (e.target.parentElement.classList.contains('appIcon')) {
    const targetApp = document.querySelector(`.appWindow[data-app=${e.target.parentElement.dataset.app}]`);
    targetApp.classList.remove("dnone");

    setActiveWindow(targetApp);
  }
})

// Switch active window
document.querySelectorAll('.appWindow').forEach(app => {
  app.addEventListener('click', e => {
    setActiveWindow(app);
  })
})

function setActiveWindow(el) {
  if (document.querySelector('.activeWindow')) {
    document.querySelector('.activeWindow').classList.remove('activeWindow');
  }

  el.classList.add('activeWindow');

  if (taskbar.querySelector(".openedAppTab.active")) {
    taskbar.querySelector(".openedAppTab.active").classList.remove('active');
  }
  taskbar.querySelector(`.openedAppTab[data-app="${el.dataset.app}"]`).classList.add('active');
}

// Taskbar shortcuts
document.querySelector('.scutDesktop').addEventListener("click", e => {
  document.querySelectorAll('.appWindow').forEach(app => {
    app.classList.add('dnone');
  })
})