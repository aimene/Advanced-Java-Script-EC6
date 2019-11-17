'use strict';

import EventEmitteur from './eventemitter3.js';
import * as controleur from'./controleur.js';
const emetteurLocal = new EventEmitteur();

function onLoad() {
  addListener('inclinaison',inclinaisonChange);
  addListener('tire',inclinaisonChange);

  document.getElementById('interface').addEventListener("click", onInterface, false);
  document.getElementById('tirer').addEventListener("click", onTire, false);

}

function inclinaisonChange(val) {
  controleur.InclinaisonChange(val);
}



function onInterface(event) {

console.log(event.target);
  switch (event.target.value) {
    case '+':  
        emetteurLocal.emit('inclinaison',1);
      break;
    case '-':
        emetteurLocal.emit('inclinaison',-1);
      break;
    default:
     break;
  }
}
function onTire(event) {
  console.log(event.target);
    
  controleur.canonTireModele();
  }


function displayCanon(CanonState) {
  document.getElementById('inclinaison-canon').textContent=CanonState.inclinaison;
  document.getElementById('vitesse-cible').textContent=CanonState.vitesse;
}

function displayDistance(distance) {
  document.getElementById('longueur-tir').textContent=distance;
}

function onUnload() {
  window.removeEventListener("load", onLoad, false);
  window.removeEventListener("unload", onUnload, false);

  removeListener('inclinaison',inclinaisonChange);
  document.getElementById('interface').removeEventListener("click", onInterface, false);
}

window.addEventListener("load", onLoad, false);
window.addEventListener("unload", onUnload, false);


function addListener(eventName, listener) {
  emetteurLocal.addListener(eventName, listener);
}

function removeListener(eventName, listener) {
  emetteurLocal.removeListener(eventName, listener);
}


export { addListener, removeListener,displayCanon,displayDistance
};
