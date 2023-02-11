window.addEventListener("message", receiveMessage, false);
var $softr_token;
function receiveMessage(event) {
  // if (event.origin !== "https://app.lindoai.com/landing/editor/beta") return;
  var data = event.data;
  $softr_token = data.data;
  jsonData.business_id = data.business_id;
  jsonData.path = data.business_id;
  // Init the editor
  $("[id^='_cta_btn_']").off("click");
  makeEditable();
  btnEditable();
  $('body').addClass('editor-active');
  $('.sidebar.left').css('display','flex');
  $(function(){
    $("body").append('<script src="https://code.jquery.com/ui/1.13.2/jquery-ui.min.js" integrity="sha256-lSjKY0/srUM9BE3dPm+c4fBo1dky2v27Gdjm2uoZaL0=" crossorigin="anonymous"></script>');
    $("body").append('<script src="js/jquery-contenteditable.min.js"></script>');
    $("body").append('<script src="https://kit.fontawesome.com/2ac67565a3.js" crossorigin="anonymous"></script>');
    $("body").append('<script src="js/jquery.sidebar.min.js"></script>');
    $("body").append('<script src="js/editor.js"></script>  ');
  });  
}

$.getJSON("/js/config.json", function(data) {
  var tier = data.tier;
  if (tier === "premium") {
    $(".lindo-badge").hide();
  }
});

