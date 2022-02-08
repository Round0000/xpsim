const appDisProp = document.querySelector(
  '.appWindow[data-app="displayproperties"]'
);

console.log(appDisProp);

appDisProp.querySelector('.app_tabs').addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    appDisProp.querySelector(".active").classList.remove("active");

    e.target.classList.add("active");
  }
});
