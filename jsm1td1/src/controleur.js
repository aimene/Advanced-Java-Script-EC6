
import * as vue from './vue.js';
import * as modele from './modele.js';

function onLoad() {
  vue.displayCanon(modele.canonState());
}

function canonChange(canonState){
   vue.displayCanon(canonState);
}
function canonTireVue(distance) {
  vue.displayDistance(distance);
}

function canonTireModele(distance) {
modele.tireCanon();
}

function InclinaisonChange(val) {

  if (val==-1) {
    modele.baisseCanon();
  }
  if (val==1) {
    modele.leveCanon();
  }
  
}

function onUnload() {
  window.removeEventListener("load", onLoad, false);
  window.removeEventListener("unload", onUnload, false);
}

window.addEventListener("load", onLoad, false);
window.addEventListener("unload", onUnload, false);


export {InclinaisonChange,canonChange,canonTireVue,canonTireModele};