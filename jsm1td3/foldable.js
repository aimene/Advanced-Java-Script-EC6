

function renderHeadersFoldable() {

   let headerList= document.getElementsByTagName("h2");

   Array.prototype.forEach.call(headerList, function(el) {
      renderHeaderFoldable(el);
      console.log(el);
});
   
}

function renderHeaderFoldable(e) {
  e.classList.remove("item-header");
  e.classList.add("item-header-js");
  let contentHtml= e.innerHTML;
  let ancher = createAnchor();
  let span = createSpan('+','item-symbol');
  ancher.appendChild(span);
  
  ancher.appendChild(contentHtml);
e.innerHTML=ancher;
e.appendChild(span);
console.log(e);
}
function createAnchor() {
  let a =  document.createElement('a');
  a.href='#';
  return a ;
}
function createSpan(spanContent,spanClass) {
  let span = document.createElement('span');
  span.classList.add(spanClass);
  span.textContent=spanContent;
  return span;
}

function loadStyleSheet(styleSheetName) {
  let head  = document.getElementsByTagName('head')[0];
  let link  = document.createElement('link');
  link.rel  = 'stylesheet';
  link.type = 'text/css';
  link.href = 'styleSheetName';
  link.media = 'all';
  head.appendChild(link);
}

renderHeadersFoldable();


  export{renderHeadersFoldable};