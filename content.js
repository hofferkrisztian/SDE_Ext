$(".plex-page-title").text("My SQL Development Environment ;)");    
document.onkeydown = capturekey;
document.onkeypress = capturekey;
document.onkeyup = capturekey;
function capturekey(e) {
    e = e || window.event;    
    if (e.code == 'F4') {                           
        e.preventDefault()
        $("li:contains('View Stored Procedures')").click()        
    }
    if (e.code == 'F5') {
        e.preventDefault()
        e.stopPropagation()                
        $("li:contains('Execute')").click()        
    }    
    if (e.code == 'F6') {
        e.preventDefault()
        $("li:contains('Save Stored Procedure')").click()
    } 
    if (e.ctrlKey && e.key == 'q') {       
       $("ul#QueryTabList > li.active").children().find("span.Remove").click()
    } 
    if ($(".plex-banner-close").is(":visible")) {    
       $(".plex-banner-close").click()
    } 
}