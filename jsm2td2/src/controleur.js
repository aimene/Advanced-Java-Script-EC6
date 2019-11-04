
function onLoad() {
}

function onUnload() {
  window.removeEventListener("load", onLoad, false);
  window.removeEventListener("unload", onUnload, false);
}

window.addEventListener("load", onLoad, false);
window.addEventListener("unload", onUnload, false);
