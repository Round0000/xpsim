const appTemplate = `
  <header class="appWindowHeader">
    <img src="" alt="" />
    <p class="appTitle"></p>
    <div class="appWindowActions">
      <button class="btnWindowMinimize"></button>
      <button class="btnWindowMaximize"></button>
      <button class="btnWindowRestore dnone"></button>
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
    menuItems: [
      {
        name: "File",
        submenu: [
          "Open Command Prompt",
          "",
          "New",
          "",
          "Create Shortcut",
          "Delete",
          "Rename",
          "Properties",
          "",
          "Close",
        ],
      },
    ],
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
  internetexplorer: {
    dataid: "internetexplorer",
    title: "Internet Explorer",
    menu: false,
    icon: "./assets/icons/ie.ico",
    maximize: true,
    html: `
          <div class="ie_topbar">
            <div class="ie_topbar_a">
              <div class="ie_nav_buttons">
                <button class="ie_back">
                  <img src="./assets/icons/ie/navbuttons/b0.png" alt="">
                  <img src="./assets/icons/ie/navbuttons/b1.png" alt="">
                  <img src="./assets/icons/ie/navbuttons/b2.png" alt="">
                </button>

                <button class="ie_forward" disabled>
                  <img src="./assets/icons/ie/navbuttons/f0.png" alt="">
                  <img src="./assets/icons/ie/navbuttons/f1.png" alt="">
                  <img src="./assets/icons/ie/navbuttons/f2.png" alt="">
                </button>
              </div>
              <form class="ie_urlform">
                <input type="text" spellcheck="false" class="ie_urlbar" value="http://127.0.0.1:5500/index.html"></input>
                <button><img src="./assets/icons/ie/navbuttons/urlarr1.png" alt=""></button>
              </form>
              <button class="ie_refresh"><img src="./assets/icons/ie/navbuttons/r1.png" alt=""><img
                  src="./assets/icons/ie/navbuttons/r2.png" alt=""></button>
              <button class="ie_stop"><img src="./assets/icons/ie/navbuttons/s1.png" alt=""><img
                  src="./assets/icons/ie/navbuttons/s2.png" alt=""></button>
              <input class="ie_searchbar" placeholder="Google"></input>
              <button class="ie_searchbutton"></button>
            </div>
            <div class="ie_topbar_b">
              <button class="ie_favs"><img src="./assets/icons/ie/fav.png" alt=""></button>
              <ul class="ie_tabs">
                <li class="ie_tab"><span>Blank Page</span>

                <button class="ie_closeTab">x</button>
                </li>
                <li class="ie_tab ie_tab_inactive"><span>Inactive page</span>
                  <button class="ie_closeTab">x</button>
                </li>


                <li class="ie_tab ie_tab_inactive ie_tab_new"></li>
              </ul>
            </div>
          </div>
          <div class="ie_frame">
            <iframe class="dnone" src="" frameborder="0"></iframe>
            <div class="ie_noconnectpage">
              <img src="./assets/icons/ie/noConnect.png" alt="" />
              <p>Internet Explorer cannot display the webpage</p>
              <hr />
              <span>What you can try:</span>
              <button>Diagnose Connection Problems</button>
              <details id="ie_moreinformation"><summary>More information</summary>
                  <p>This problem can be caused by a variety of issues, including: </p>
                  <ul>
                    <li>Internet connectivity has been lost.</li>
                    <li>The website is temporarily unavailable.
                    </li>
                    <li>The Domain Name Server (DNS) is not reachable.
                    </li>
                    <li>The Domain Name Server (DNS) does not have a listing for the website's domain.
                    </li>
                    <li>There might be a typing error in the address.
                    </li>
                    <li>If this is an HTTPS (secure) address, click Tools, click Internet Options, click Advanced, and
                      check to be sure the SSL and TLS protocols are enabled under the security section.
                    </li>
                  </ul>
                  <p><strong>For offline users

                  </strong></p>
                  <p>You can still view subscribed feeds and some recently viewed webpages.
                  </p>
                  <p>To view subscribed feeds

                  </p>
                  <ol>
                    <li>Click the Favorites Center button <img src="./assets/icons/ie/fav.png" alt="">, click Feeds, and then click the feed you want to view.
                    </li>
                  </ol>
                  <p>To view recently visited webpages (might not work on all pages)

                  </p>
                  <ol>
                    <li>Click Tools <img src="./assets/icons/ie/tools.png" alt="">, and then click Work Offline.
                    </li>
                    <li>Click the Favorites Center button <img src="./assets/icons/ie/fav.png" alt="">, click History, and then click the page you want to view.
                    </li>
                  </ol>
                </details>


            </div>
          </div>
    `,
  },
  displayproperties: {
    dataid: "displayproperties",
    title: "Display Properties",
    menu: false,
    icon: "./assets/icons/fileexplorer.ico",
    maximize: false,
    html: `
    
    
    <ul class="appMenu dnone">
    </ul>
    <div class="appContent">
      <ul class="app_tabs">
        <li>Themes</li>
        <li class="active">Desktop</li>
        <li>Screen Saver</li>
        <li>Appearance</li>
        <li>Settings</li>
      </ul>
      <div class="app_content">
        <div class="disp_desktop">
          <div class="disp_monitor">
            <img src="./assets/images/displaypropmonitor.png" alt="">
          </div>
          <p>Background:</p>
          <div class="disp_bg_options">
            <ul>
              <li>(None)</li>
              <li>bliss</li>
            </ul>
            <div class="disp_bg_options_inputs">
              <button>Browse...</button>
              <label>
                Position:
                <select>
                  <option value="stretch">Center</option>
                  <option value="stretch">Tile</option>
                  <option value="stretch">Stretch</option>
                </select>
              </label>
              <label>
                Color:
                <input type="color">
              </label>
            </div>
          </div>
          <button>Customize Desktop...</button>
        </div>
      </div>
      <div class="app_actions">
        <button>OK</button>
        <button>Cancel</button>
        <button>Apply</button>
      </div>


    </div>
    `,
  },
};

const contextMenus = {
  desktop: [
    "Arrange Icons By",
    "Refresh",
    "",
    "Paste",
    "Paste Shortcut",
    "Undo",
    "Open Command Prompt",
    "",
    "New",
    "",
    "Properties",
  ],
};
