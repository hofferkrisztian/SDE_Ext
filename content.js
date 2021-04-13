$(document).ready(function(){
  $(".plex-navbar-container-wrapper").append('<div><label class="switch"><input type="checkbox" id="extension-enabled" checked="true"><span class="slider round"></span></label></div>');
  $(".plex-page-title").text("SQL Development Environment ;)");  
});
document.onkeydown = capturekey;
document.onkeypress = capturekey;
document.onkeyup = capturekey;                                   
function clickView () {
  $("li:contains('View Stored Procedures')").click();
}
function clickSave () {
  $("li:contains('Save Stored Procedure')").click();
}
function clickExecute() {
  $("li:contains('Execute')").click()
}
function clickRemove() {
  $("ul#QueryTabList > li.active").children().find("span.Remove").click();
}
function clickProperties() {
  $("div.query-tab").children().find('span:contains("Properties")').click();
}
function activeTabText() {
  return $("ul#QueryTabList > li.active").children().find('span:contains("New Query")').text();
}
function capturekey(e) {
  e = e || window.event;    
  //run these only if slider is enabled
  
  if ($("#extension-enabled").is(":checked")) {
    if (e.code == 'F4') {                           
      e.preventDefault();
      clickView();        
    }
    if (e.code == 'F6' || (e.ctrlKey && e.key =='s') ) {
      e.preventDefault();
      if(activeTabText()=="New Query"){
        clickProperties();
        alert("Name the procedure first!");
      }else{
        clickSave();
      }      
    }               
    if (e.ctrlKey && e.key == 'q') {       
      clickRemove();
    }    
  }
  //always run these
  if (e.code == 'F5') {
    e.preventDefault();
    e.stopPropagation();                
    clickExecute();        
  }
  if ($(".plex-banner-close").is(":visible")) {    
    $(".plex-banner-close").click();
  }     
}