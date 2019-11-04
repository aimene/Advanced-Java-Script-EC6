import emettreValeurs from './emetteurValeurs.js';
import EventEmitter from './eventemitter3.js';

const emetteur = new EventEmitter();

function ecouteur(valeur) {
    console.log(`valeur = ${valeur}`);
}



emetteur.addListener('valeurs', ecouteur);

emettreValeurs([1,2,3,4],1000 ,emetteur,'valeurs');

