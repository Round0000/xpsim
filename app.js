const appTemplate = `
  <header class="appWindowHeader">
    <img src="" alt="" />
    <p class="appTitle"></p>
    <div class="appWindowActions">
      <button class="btnWindowMinimize"></button>
      <button class="btnWindowMaximize"></button>
      <button class="btnWindowClose"></button>
    </div>
  </header>
  <ul class="appMenu dnone">
  </ul>
  <div class="appContent"></div>
`;

const apps = {
  notepad: {
    dataid: "notepad",
    title: "Notepad",
    menu: true,
    menuItems: ["File", "Edit", "Format", "View", "Help"],
    icon: "./assets/icons/notepad.ico",
    html: `
    <textarea class="notepadTextarea" spellcheck="false"></textarea>
    `,
  },
  fileexplorer: {
    dataid: "fileexplorer",
    title: "File Explorer",
    menu: true,
    menuItems: ["File", "Edit", "View", "Favorites", "Tools", "Help"],
    icon: "./assets/icons/fileexplorer.ico",
    html: `
    <div class="fileExpActions">
    <button><img src="./assets/icons/help.ico" alt="">Back</button>
    <button>Forward</button>
    <button>Prev Folder</button>
    <div class="verticalseparator"></div>
    <button><img src="./assets/icons/search.ico" alt="">Search</button>
    <button><img src="./assets/icons/folders.ico" alt="">Folders</button>
    <div class="verticalseparator"></div>
    <button><img src="./assets/icons/display.ico" alt="">Display</button>
  </div>
  <div class="fileExpAddressBar">
    <span>Address</span>
    <div class="fileExpAddressInput"><img src="./assets/icons/mydocuments.ico" alt="" />
      <input type="text" value="My Documents">
    </div>
    <button>Go</button>
  </div>
  <div class="appWindowContent">
    <aside class="sidebar">
      <div class="sidebarBlock">
        <div class="sidebarBlockHeader">
          File and Folder Tasks
        </div>
        <div class="sidebarBlockItems">
          <button class="sidebarItem">
            <img src="./assets/icons/makenewfolder.ico" alt="">
            Make a new folder
          </button>
          <button class="sidebarItem">
            <img src="./assets/icons/makenewfolder.ico" alt="">
            Publish this folder to the Web
          </button>
          <button class="sidebarItem">
            <img src="./assets/icons/makenewfolder.ico" alt="">
            Share this folder
          </button>
        </div>
      </div>
      <div class="sidebarBlock">
        <div class="sidebarBlockHeader">
          Other places
        </div>
        <div class="sidebarBlockItems">
          <button class="sidebarItem">
            <img src="./assets/icons/makenewfolder.ico" alt="">
            Desktop
          </button>
          <button class="sidebarItem">
            <img src="./assets/icons/makenewfolder.ico" alt="">
            My Computer
          </button>
          <button class="sidebarItem">
            <img src="./assets/icons/makenewfolder.ico" alt="">
            My Network Places
          </button>
        </div>
      </div>
      <div class="sidebarBlock">
        <div class="sidebarBlockHeader">
          Details
        </div>
        <div class="sidebarBlockItems">
          <div class="folderDetails">
            <p>My Documents</p>
            <p>System Folder</p>
          </div>
        </div>
      </div>
    </aside>
    <div class="appWindowInside">
      <button class="folderItem">
        <img src="./assets/icons/mymusic.ico" alt="" class="icon_regular">
        My Music
      </button>
      <button class="folderItem">
        <img src="./assets/icons/mypictures.ico" alt="" class="icon_regular">
        My Pictures
      </button>
      <button class="folderItem">
        <img src="./assets/icons/myvideos.ico" alt="" class="icon_regular">
        My Videos
      </button>
    </div>
  </div>
    `,
  }
}

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
    if (taskbar.querySelector('.openedAppTab')) {
      setActiveWindow(document.querySelector('.appWindow:last-of-type'));
    }
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
  console.log(e);

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
  

  if (e.target.parentElement.classList.contains('appIcon')) {
    openApp(e.target.parentElement.dataset.app);
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

  taskbar.querySelector(`[data-app="${el.dataset.app}"]`).classList.add('active');
}

// Taskbar shortcuts
document.querySelector('.scutDesktop').addEventListener("click", e => {
  document.querySelectorAll('.appWindow').forEach(app => {
    app.classList.add('dnone');
  })
})

function openApp(app) {
  const a = apps[app];

  const newApp = document.createElement('DIV');
  newApp.classList.add('appWindow');
  newApp.dataset.app = a.dataid;
  newApp.dataset.appTitle = a.title;
  newApp.innerHTML = appTemplate;
  newApp.querySelector('.appWindowHeader img').src = a.icon;
  newApp.querySelector('.appTitle').innerText = a.title;
  if (a.menu) {
    const menu = newApp.querySelector('.appMenu');
    a.menuItems.forEach(item => {
      const li = document.createElement('LI');
      li.innerText = item;
      menu.append(li);
      menu.classList.remove("dnone");
    })
  }

  newApp.querySelector('.appContent').innerHTML = a.html;

  desktop.append(newApp);

  
  const newTab = document.createElement('BUTTON');
  newTab.classList.add('openedAppTab');
  newTab.dataset.app = a.dataid;
  newTab.innerHTML = `<img src="${a.icon}"" alt="" />${a.title}`;
  openedApps.append(newTab);
  
  setActiveWindow(newApp);
}

