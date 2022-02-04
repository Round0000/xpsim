startBtn.addEventListener("click", () => {
  startMenu.classList.toggle("dnone");
});

document.addEventListener("click", (e) => {
  if (e.target.closest("#startMenu") || e.target.closest("#startBtn")) return;

  startMenu.classList.add("dnone");
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
  if (e.target.classList.contains("btnWindowClose")) {
    const app = e.target.closest(".appWindow");
    app.classList.add("dnone");
    taskbar
      .querySelector(`.openedAppTab[data-app="${app.dataset.app}"]`)
      .remove();
    if (taskbar.querySelector(".openedAppTab")) {
      setActiveWindow(document.querySelector(".appWindow:last-of-type"));
    }
  }
  if (e.target.classList.contains("btnWindowMinimize")) {
    e.target.closest(".appWindow").classList.toggle("minimized");
    setTimeout(() => {
      openedApps
        .querySelector(
          `[data-app="${e.target.closest(".appWindow").dataset.app}"]`
        )
        .classList.remove("active");
    }, 100);
  }
});

// Drag'n'drop

let dragged = false;
let currentlyDragged;
let draggedOffsetX;
let draggedOffsetY;

document.addEventListener("mousedown", (e) => {
  if (!e.target.classList.contains("appWindowHeader")) return;

  setActiveWindow(e.target.closest(".appWindow"));
  dragged = true;
  currentlyDragged = e.target.closest(".appWindow");

  draggedOffsetX = e.offsetX;
  draggedOffsetY = e.offsetY;
});

document.addEventListener("mouseup", (e) => {
  dragged = false;
});

document.addEventListener("mousemove", (e) => {
  if (!dragged) return;

  dragndrop(currentlyDragged, e);
});

function dragndrop(el, e) {

  if (el.getBoundingClientRect().left <= 0) {
    el.style.left = "0";
  } else {
    el.style.left = e.pageX - draggedOffsetX + "px";
    el.style.top = e.pageY - draggedOffsetY + "px";
  }
  if (el.getBoundingClientRect().top <= 0) {
    el.style.top = "0";
  } else {
    el.style.left = e.pageX - draggedOffsetX + "px";
    el.style.top = e.pageY - draggedOffsetY + "px";
  }
}

// Right click

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();

  contextualMenu.style.left = e.x + "px";
  contextualMenu.style.top = e.y + "px";
  setTimeout(() => {
    contextualMenu.classList.remove("invisible");
  }, 100);
});

document.addEventListener("click", (e) => {
  setTimeout(() => {
    contextualMenu.classList.add("invisible");
  }, 100);
});

document.addEventListener("dblclick", (e) => {
  if (e.target.parentElement.classList.contains("appIcon")) {
    openApp(e.target.parentElement.dataset.app);
  }
});

// Switch active window
document.querySelectorAll(".appWindow").forEach((app) => {
  app.addEventListener("click", (e) => {
    // setActiveWindow(app);
  });
});

function setActiveWindow(el) {
  if (document.querySelector(".activeWindow")) {
    document.querySelector(".activeWindow").classList.remove("activeWindow");
  }

  el.classList.add("activeWindow");

  if (taskbar.querySelector(".openedAppTab.active")) {
    taskbar.querySelector(".openedAppTab.active").classList.remove("active");
  }

  taskbar
    .querySelector(`[data-app="${el.dataset.app}"]`)
    .classList.add("active");
}

// Taskbar shortcuts
document.querySelector(".scutDesktop").addEventListener("click", (e) => {
  document.querySelectorAll(".appWindow").forEach((app) => {
    app.classList.add("dnone");
  });
});

function openApp(app) {
  const a = apps[app];

  const newApp = document.createElement("DIV");
  newApp.classList.add("appWindow");
  newApp.dataset.app = a.dataid;
  newApp.dataset.appTitle = a.title;
  newApp.innerHTML = appTemplate;
  if (!a.maximize) {
    newApp.querySelector('.btnWindowMaximize').disabled = true;
  }
  newApp.querySelector(".appWindowHeader img").src = a.icon;
  newApp.querySelector(".appTitle").innerText = a.title;
  if (a.menu) {
    const menu = newApp.querySelector(".appMenu");
    a.menuItems.forEach((item) => {
      const li = document.createElement("LI");
      li.innerText = item;
      menu.append(li);
      menu.classList.remove("dnone");
    });
  }

  newApp.querySelector(".appContent").innerHTML = a.html;

  desktop.append(newApp);

  const newTab = document.createElement("BUTTON");
  newTab.classList.add("openedAppTab");
  newTab.dataset.app = a.dataid;
  newTab.innerHTML = `<img src="${a.icon}"" alt="" />${a.title}`;
  openedApps.append(newTab);

  setActiveWindow(newApp);
}

// Internal clock
function getCurrentTime() {
  let currentTime = new Date(Date.now());
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  time.innerText = hours + ":" + minutes;
}

getCurrentTime();

setInterval(() => {
  getCurrentTime();
}, 30000);

//
//
//
// openApp("calculator");
