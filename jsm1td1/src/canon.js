
'use strict';

export default class Canon{
    constructor( vitesseSortie, paramInclinaison ){
        this._vitesseSortie=vitesseSortie;
        this._paramInclinaison=paramInclinaison;
        this._inclinaison=paramInclinaison.min;
    }

    inclinaison() {
        return this._inclinaison;
    }

    leve(){
        if(this._inclinaison+this._paramInclinaison.delta< this._paramInclinaison.max){
            this.inclinaison+=this._paramInclinaison.delta;
            return true;
        }
        return false;
    }

    baisse(){
        if(this._inclinaison-this._paramInclinaison.delta> this._paramInclinaison.min){
            this.inclinaison+=this._paramInclinaison.delta;
            return true;
        }
        return false;
    }
    

    portee(){
        return ( Math.pow( this._vitesseSortie , 2)/ 9.81 );
    }

    tir() {
        return(  Math.pow(this._vitesseSortie,2)* Math.sin(2*this._inclinaison)/9.81);
    }

    state(){
        return { inclinaison : this._inclinaison, vitesse: this._vitesseSortie };
    }

  
}

