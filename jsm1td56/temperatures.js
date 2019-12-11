import * as view from './view.js'

function temperaturesHTMLTable(temperaturesOBJ) {
   let HTML ;
   HTML='<table>';
   HTML+='<caption>'+temperaturesOBJ.description+'</caption>';
   HTML+='<thead><tr><td></td>';
   for (const month of temperaturesOBJ.months) {
      HTML+='<th>'+month+'</th>'
   }
   HTML+='</tr></thead>';
   HTML+='<tbody>';
   let tempArray = temperaturesOBJ.temperatures;
   for (const temp of tempArray) {
     HTML+= temperaturesHTMLTR(temp);
   }
   HTML+='</tbody>';
   HTML+='</table>';
   console.log(HTML);
   return HTML;
}

function temperaturesHTMLTR(temp) {
   let tr ;
   tr ='<tr><th>'+temp.location +'</th>'
   for (const tempVille of temp.temperatures) {
      tr+= '<td>'+tempVille+'</td>';
   }
   tr+='</tr>'
   return tr;
}


function temperaturesDatasetsFrom(temperatures , colors) {
   let obj = new Array();
   let label ;
   let data = new Array();;
   let borderColor ;
   let cpt =0 ;
   for (const temp of temperatures) {
      label = temp.location;
      data = temp.temperatures;
      borderColor = colors[cpt];
      cpt++;
      obj.push({"label" : label, "data": data , "borderColor" : borderColor});
   }
   return obj ;  
}

function temperaturesChartFrom(t, ctx, col) {
   let dataSet = temperaturesDatasetsFrom( t , col);
   let myChart = new Chart(ctx, {
       type:"line",
       data:{
       labels:view.temperaturesOfPage().months,
       datasets: dataSet
       },
       options:{
       title: { display: true, text: "description" },
       datasets: { line: { lineTension:0, fill: false }},
       responsive: false
       }
       });
       return myChart;
}


function temperaturesFromTable(table) { 
   let obj = view.temperaturesOfPage(table);
   return obj ; 
}


export { temperaturesFromTable,temperaturesChartFrom,temperaturesHTMLTable}