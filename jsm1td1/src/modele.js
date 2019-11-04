import EventEmitteur from './eventemitter3.js';

import Canon from'./canon.js';

const emetteurLocal = new EventEmitteur();

const canonVar = newCanon();

function leveCanon() {
  if (canonVar.leve()) {
    removeListener('canonChange',() => {});
    addListener('canonChange',() => {});
    emetteurLocal.emit('canonChange',canonVar.state());
  }
}
function baisseCanon() {
  if (canonVar.baisse()) {
    alert(canonVar.state().inclinaison)
    removeListener('canonChange',() => {});
    addListener('canonChange',() => {});
    emetteurLocal.emit('canonChange',canonVar.state());
  }
}
function addListener(eventName, listener) {
  emetteurLocal.addListener(eventName, listener);
}

function removeListener(eventName, listener) {
  emetteurLocal.removeListener(eventName, listener);
}

function newCanon(){
  return new Canon(100,{min:30,max:155,delta:5});
}

function canonState() {
  return canonVar.state();
}



export { addListener, removeListener,canonState, leveCanon, baisseCanon};