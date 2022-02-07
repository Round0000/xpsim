const appW = document.querySelector('.appWindow[data-app="internetexplorer"]');

appW.querySelector(".ie_urlform").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.srcElement[0].value);
  
});
