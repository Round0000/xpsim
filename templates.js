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
    menuItems: [
      {
        name: "File",
        submenu: [
          "New",
          "Open...",
          "Save",
          "Save As...",
          "",
          "Page Setup",
          "Print...",
          "",
          "Exit",
        ],
      },
      {
        name: "Edit",
        submenu: [
          "Undo",
          "",
          "Cut",
          "Copy",
          "Paste",
          "Delete",
          "",
          "Find",
          "Find Next",
          "Replace",
          "Go To...",
          "",
          "Select All",
          "Time/Date",
        ],
      },
      {
        name: "Format",
        submenu: ["Word Wrap", "Font..."],
      },
      {
        name: "View",
        submenu: ["Status Bar"],
      },
      {
        name: "Help",
        submenu: ["Help Topics", "", "About Notepad"],
      },
    ],
    icon: "./assets/icons/notepad.ico",
    maximize: true,
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
    maximize: true,
    html: `
    <div class="fileExpActions">
    <button><img src="./assets/icons/back.ico" alt="">Back</button>
    <button><img src="./assets/icons/forward.ico" alt=""></button>
    <button><img src="./assets/icons/prevfolder.ico" alt=""></button>
    <div class="verticalseparator"></div>
    <button><img src="./assets/icons/search.ico" alt="">Search</button>
    <button><img src="./assets/icons/folders.ico" alt="">Folders</button>
    <div class="verticalseparator"></div>
    <button><img src="./assets/icons/display.ico" alt=""></button>
  </div>
  <div class="fileExpAddressBar">
    <span>Address</span>
    <div class="fileExpAddressInput"><img src="./assets/icons/mydocuments.ico" alt="" />
      <input spellcheck="false" type="text" value="My Documents">
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
            <img src="./assets/icons/desktop.ico" alt="">
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
  },
  calculator: {
    dataid: "calculator",
    title: "Calculator",
    menu: true,
    menuItems: [
      {
        name: "Edit",
        submenu: ["Copy", "Paste"],
      },
      {
        name: "View",
        submenu: [
          "Standard",
          "Scientific",
          "Conversion",
          "",
          "Digit grouping",
          "Classic View",
        ],
      },
      {
        name: "Help",
        submenu: ["Help Topics", "", "About Calculator"],
      },
    ],
    icon: "./assets/icons/calculator.ico",
    maximize: false,
    html: `
    <p class="calc_result">0.</p>
            <div class="calc_interface">
              <div class="calc_empty"></div>

              <div class="calc_topline">
                <button>Backspace</button>
                <button>CE</button>
                <button>C</button>
              </div>

              <div class="calc_leftline">
                <button>MC</button>
                <button>MR</button>
                <button>MS</button>
                <button>M+</button>
              </div>

              <div class="calc_mainblock">
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button class="calc_red">/</button>
                <button>sqrt</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button class="calc_red">*</button>
                <button>%</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button class="calc_red">-</button>
                <button>1/x</button>
                <button>0</button>
                <button>+/-</button>
                <button>.</button>
                <button class="calc_red">+</button>
                <button class="calc_red">=</button>
              </div>
            </div>
    `,
  },
};
