import * as temp from './temperatures.js'
var temperaturesChart = null;
var colors = new Array();

// Affichage des températures
function displayTemperaturesTable(tableID,obj) {
    let div = document.getElementById(tableID);
    let table = temp.temperaturesHTMLTable(obj);
    
    div.innerHTML=table;
}
function displayTemperaturesChart() {
    let ctx = document.getElementById('temp-canvas').getContext('2d');
    colors = newColors(temperaturesOfPage().temperatures.length);
    temperaturesChart=temp.temperaturesChartFrom(temperaturesOfPage().temperatures,ctx,colors);
    colorizeTable('tempvilles',colors);
}

// Amélioration de la table
function colorizeTable(tableID, colors) {
    let table = document.getElementById(tableID);
    let tBody = table.getElementsByTagName('tbody')[0];
    let lines = tBody.getElementsByTagName('tr');
    let i =0;
    for ( const line of lines) {
        let location=line.firstElementChild;
        location.style.color=colors[i++];
    }
}

function newColors(n) {
    let colorsTemp = [];
    let H ;
    let S  = 97; 
    let L = 42 ;
    for (let i = 0; i < n; i++) {
        H = i*360/n;
        colorsTemp.push("hsl("+H+","+ S+"%,"+L+"%)") ;
    }
    return colorsTemp;
}

// Tableau des données
function temperaturesOfPage() { 
    const table = document.getElementById('tempvilles');
    let description = getDescription(table);
    let months = getMonths(table);
    let temps = getLocationTemperaturesObject(table);
    let Object = {'description' :description,'months' : months, 'temperatures': temps};
    return Object;
}

function getDescription(table) {     
    let description = table.caption.textContent;
    return description;
}

function getMonths(table) {
    let monthsObject = table.tHead.getElementsByTagName('th');
    let months = new Array;  
    for ( const month of monthsObject) {
            months.push(month.textContent);
    }
    return months;
}

function getLocationTemperaturesObject(table) {
    let tBody = table.getElementsByTagName('tbody')[0];
    let lines = tBody.getElementsByTagName('tr');
    let temperatures = new Array;
    for ( const line of lines) {
        let tempsGroupValue;
        let location;
        let temps = new Array;
        location= line.firstElementChild.textContent;
        tempsGroupValue=line.getElementsByTagName('td');
        for (const tempsValue of tempsGroupValue) { 
            temps.push(tempsValue.textContent);
        } 
        temperatures.push({location : location,temperatures : temps});
    }
    return temperatures;
}

export{ temperaturesOfPage ,newColors,displayTemperaturesChart,displayTemperaturesTable}