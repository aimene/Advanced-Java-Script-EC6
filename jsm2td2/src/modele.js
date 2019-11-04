import EventEmitteur from './eventemitter3.js';

const emetteurLocal = new EventEmitteur();


function addListener(eventName, listener) {
  emetteurLocal.addListener(eventName, listener);
}

function removeListener(eventName, listener) {
  emetteurLocal.removeListener(eventName, listener);
}


export { addListener, removeListener
};
