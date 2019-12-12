import * as view from "./view.js";

let temper = null;

function onHandleDiagram(event) {

}
function onClickMenu(event) {

    console.log(event.target.id);

    //Sauvegarde des températures
    if (event.target.id == "sauver") {
        console.log(JSON.stringify(temper));
        if (temper != null) {
            let file = new File([JSON.stringify(temper)], "hello world.json", { type: "application/json;charset=utf-8" });
            saveAs(file);
        }
    }




    let modal = document.getElementById('dialog-afficher');


    // Affichage du diagramme dans un dialogue modal
    if (event.target.id == "diagram") {

        window.location = '#dialog-afficher';
        modal.style.display = "block";
        view.displayTemperaturesChart(view.temperaturesOfPage());
    }


}

function onClose(params) {

    let modal = document.getElementById('dialog-afficher');
    if (event.target.id == "close") {
        modal.style.display = "none";
    }
}


// Lecture des températures
function onReaderLoad(event) {
    temper = JSON.parse(event.target.result);
    view.displayTemperaturesTable("temperature-table", temper);
}

function onFileChange(event) {
    if (event.target.id == "temp-file") {
        var reader = new FileReader();
        reader.onload = onReaderLoad;
        reader.readAsText(event.target.files[0]);
    }
}


function onLoad() {
    let menu = document.getElementById('menu');
    menu.addEventListener('change', onFileChange, false);
    menu.addEventListener('click', onClickMenu, false);
    let modal = document.getElementById('dialog-afficher');
    modal.addEventListener('click', onClose, false);



}

function onUnload() {
    window.removeEventListener("load", onLoad, false);
    window.removeEventListener("unload", onFileSave, false);
}

window.addEventListener("load", onLoad, false);
window.addEventListener("unload", onUnload, false);
