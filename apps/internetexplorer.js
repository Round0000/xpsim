

document.querySelector('.appWindow[data-app="internetexplorer"]').querySelector(".ie_urlform").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.srcElement[0].value);
});

document.querySelector('.appWindow[data-app="internetexplorer"]').addEventListener("click", (e) => {
  if (
    e.target.classList.contains("ie_tab") &&
    !e.target.classList.contains("ie_tab_new")
  ) {
    document.querySelector('.appWindow[data-app="internetexplorer"]')
      .querySelector(".ie_tab:not(.ie_tab_inactive)")
      .classList.add("ie_tab_inactive");
    e.target.classList.remove("ie_tab_inactive");
  }

  if (e.target.classList.contains("ie_tab_new")) {
    const newTab = document.createElement("LI");
    document.querySelector('.appWindow[data-app="internetexplorer"]')
      .querySelector(".ie_tab:not(.ie_tab_inactive)")
      .classList.add("ie_tab_inactive");
    newTab.classList.add("ie_tab");
    newTab.innerHTML = `<span>New Tab</span> <button class="ie_closeTab">x</button>`;
    e.target.remove();
    document.querySelector('.appWindow[data-app="internetexplorer"]').querySelector(".ie_tabs").append(newTab);
    const newTabTab = document.createElement("LI");
    newTabTab.classList.add("ie_tab", "ie_tab_inactive", "ie_tab_new");
    document.querySelector('.appWindow[data-app="internetexplorer"]').querySelector(".ie_tabs").append(newTabTab);
  }

  if (e.target.classList.contains("ie_closeTab")) {
    const nextTab = e.target.parentElement.nextElementSibling;

    e.target.parentElement.remove();

    document.querySelector('.appWindow[data-app="internetexplorer"]').querySelectorAll(".ie_tab").forEach((tab) => {
      tab.classList.add("ie_tab_inactive");
    });

    nextTab.classList.remove("ie_tab_inactive");
  }
});
