import * as view from './view.js'


const table = document.getElementById('tempvilles');
var t = view.temperaturesOfPage(table);
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
       labels:view.temperaturesOfPage(table).months,
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


view.displayTemperaturesChart();

export { temperaturesFromTable,temperaturesChartFrom}