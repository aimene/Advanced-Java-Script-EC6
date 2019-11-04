import EventEmitteur from './eventemitter3.js';

const emetteurLocal = new EventEmitteur();

function onLoad() {
}

function onUnload() {
  window.removeEventListener("load", onLoad, false);
  window.removeEventListener("unload", onUnload, false);
}

window.addEventListener("load", onLoad, false);
window.addEventListener("unload", onUnload, false);


function addListener(eventName, listener) {
  emetteurLocal.addListener(eventName, listener);
}

function removeListener(eventName, listener) {
  emetteurLocal.removeListener(eventName, listener);
}


export { addListener, removeListener
};
