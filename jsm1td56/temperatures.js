import * as view from './view.js'


// Affichage des températures
function temperaturesHTMLTable(temperaturesOBJ) {
   let HTML;
   HTML = '<table  id="tempvilles">';
   HTML += '<caption>' + temperaturesOBJ.description + '</caption>';
   HTML += '<thead><tr><td></td>';
   for (const month of temperaturesOBJ.months) {
      HTML += '<th>' + month + '</th>';
   }
   HTML += '</tr></thead>';
   HTML += '<tbody>';
   let tempArray = temperaturesOBJ.temperatures;
   for (const temp of tempArray) {
      HTML += temperaturesHTMLTR(temp);
   }
   HTML += '</tbody>';
   HTML += '</table>';
   return HTML;
}
// Affichage des températures
function temperaturesHTMLTR(temp) {
   let tr;
   tr = '<tr><th>' + temp.location + '</th>'
   for (const tempVille of temp.temperatures) {
      tr += '<td>' + tempVille + '</td>';
   }
   tr += '</tr>'
   return tr;
}

// Tracé du diagramme
function temperaturesDatasetsFrom(temperatures, colors) {
   let obj = new Array();
   let label;
   let data = new Array();;
   let borderColor;
   let cpt = 0;
   for (const temp of temperatures) {
      label = temp.location;
      data = temp.temperatures;
      borderColor = colors[cpt];
      cpt++;
      obj.push({ "label": label, "data": data, "borderColor": borderColor });
   }
   return obj;
}
// Tracé du diagramme
function temperaturesChartFrom(t, ctx, col) {
   let dataSet = temperaturesDatasetsFrom(t.temperatures, col);
   let myChart = new Chart(ctx, {
      type: "line",
      data: {
         labels: t.months,
         datasets: dataSet
      },
      options: {
         title: { display: true, text: t.description },
         datasets: { line: { lineTension: 0, fill: false } },
         responsive: false
      }
   });
   return myChart;
}

// Tableau des données
function temperaturesFromTable(table) {
   let obj = view.temperaturesOfPage(table);
   return obj;
}


export { temperaturesFromTable, temperaturesChartFrom, temperaturesHTMLTable }