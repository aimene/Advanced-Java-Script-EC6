import EventEmitteur from './eventemitter3.js';

import Canon from'./canon.js';
import * as controleur from'./controleur.js';

const emetteurLocal = new EventEmitteur();

const canonVar = nouveauCanon(100,30,90,3);
addListener('canonChange',Change);

function Change(canonState) {
  controleur.canonChange(canonState);
}
function leveCanon() {
  if (canonVar.leve()) {
    emetteurLocal.emit('canonChange',canonState());
  }
}
function baisseCanon() {
  if (canonVar.baisse()) {
    emetteurLocal.emit('canonChange',canonState());
  }
}
function addListener(eventName, listener) {
  emetteurLocal.addListener(eventName, listener);
}

function removeListener(eventName, listener) {
  emetteurLocal.removeListener(eventName, listener);
}

function nouveauCanon(vitesse,min,max,delta){
  let canon = new Canon(vitesse,{min:min,max:max,delta:delta});
  emetteurLocal.emit('canonChange',canon.state());
  return canon;
}

function canonState() {
  return canonVar.state();
}



export { addListener, removeListener,canonState, leveCanon, baisseCanon};