var gtmId = 'GTM-PJLCWF3';
var gtmHeaderScript = '<!-- Google Tag Manager -->'+ '\n' + '<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({\'gtm.start\': new Date().getTime(),event:\'gtm.js\'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!=\'dataLayer\'?\'&l=\'+l:\'\';j.async=true;j.src= \'https://www.googletagmanager.com/gtm.js?id=\'+i+dl;f.parentNode.insertBefore(j,f); })(window,document,\'script\',\'dataLayer\',\''+ gtmId + '\');</script>';
var gtmBodyScript = '<!-- Google Tag Manager -->'+ '\n' + '<noscript><iframe src="https://www.googletagmanager.com/ns.html?id='+ gtmId +'" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>';

// var jsonConfig = {}
// jsonConfig["_gtm_header"] = ""
$(function(){
    $("#editor-placeholder").load("../blocks/editor.html"); 
});
$(document).ready(function() {
    // $( "head" ).append( gtmHeaderScript );
    // $( "body" ).prepend( gtmBodyScript );
});