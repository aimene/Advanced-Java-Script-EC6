
export default function emettreValeurs(valeurs,delai, emetteur , type ) {
    let ivaleur=0;
    function emettre() {
        emetteur.emit(type,valeurs[ivaleur]);
        ++ivaleur;
        if (ivaleur<valeurs.length) {
            setTimeout(emettre,delai);
        }
    }
    if (ivaleur<valeurs.length) {
        setTimeout(emettre,delai);
    }
    
}