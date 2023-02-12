
var editorHTML = '\
  <div id="editor-html">\
    <!-- SIDEBAR SETTINGS -->\
    <div class="sidebar left" style="display: none;">\
        <!-- HEADER -->\
        <div class="sidebar-header">\
            <div class="title">\
            <h3>Page settings</h3>\
            </div>\
            <div class="action">\
            <span class="close-sidebar" href=""><i class="fa-solid fa-xmark"></i></span>\
            </div>\
        </div>\
        <!-- ITEM -->\
        <div class="input-label">\
            <h4>Page Name</h4>\
            <input id="_page_name_input" type="text" placeholder="E.g. Hubspot | Tools for your business " value="Lindo | Marketing Ai Assitant">\
        </div>\
        <!-- ITEM -->\
        <div class="input-label">\
            <h4>Page URL</h4>\
            <input id="_page_url_input" type="text" placeholder="E.g. /trynow" value="/trynow">\
        </div>\
    </div>  \
    <!-- EDITOR PANEL -->\
    <div id="editor-panel" class="editor-panel">\
        <div class="editor-settings">\
            <span class="action open-settings"><i class="fa-solid fa-gear"></i></span>\
        </div>\
        <div class="editor-actions">\
            <button id="save_changes" class="save_changes">Publish</button>\
        </div>\
    </div>  \
  </div>';

  var jsonData = {
    "business_id": "",
    "template": "launch",
    "path": "",
    "data": {
      "_page_name" : $('head').find('title').text(),
      "_image_feature_1_url" : $('#image_feature_1').attr('src'),
      "_image_feature_2_url" : $('#image_feature_2').attr('src'),
      "_image_feature_3_url" : $('#image_feature_3').attr('src'),
      "_cta_btn_header_url" : $('#_cta_btn_header_text').attr('href'),
      "_cta_btn_hero_url" : $('#_cta_btn_hero_text').attr('href'),
      "_cta_btn_banner_url" : $('#_cta_btn_banner_text').attr('href'),
      "_cta_btn_header_text" : $('#_cta_btn_header_text').find('span').text(),
      "_cta_btn_hero_text" : $('#_cta_btn_hero_text').find('span').text(),
      "_cta_btn_banner_text" : $('#_cta_btn_banner_text').find('span').text(),
      "_cta_btn_hero_subtitle" : $('#_cta_btn_hero_subtitle').text(),
      "_cta_title_banner_text" : $('#_cta_title_banner_text').text(),
      "_cta_btn_banner_subtitle" : $('#_cta_btn_banner_subtitle').text(),
      "_hero_title" : $('#_hero_title').text(),
      "_hero_subtitle" : $('#_hero_subtitle').text(),
      "_product_description_title" : $('#_product_description_title').text(),
      "_product_description_subtitle" : $('#_product_description_subtitle').text(),
      "_feature_title_1" : $('#_feature_title_1').text(),
      "_feature_description_1" : $('#_feature_description_1').text(),
      "_feature_title_2" : $('#_feature_title_2').text(),
      "_feature_description_2" : $('#_feature_description_2').text(),
      "_feature_title_3" : $('#_feature_title_3').text(),
      "_feature_description_3" : $('#_feature_description_3').text(),
      "_copyright_text" : $('#_copyright_text').text(),
      "_made_text" : $('#_made_text').text(),  
      
    }
  };
function btnEditable(){
  //href edit #header
  $("#_cta_btn_header_text").click(function() {
    var href = $(this).attr("href");
    $(this).siblings(".edit-url-component").find("input").val(href);
    $(this).siblings(".edit-url-component").show();
  });
  $("#_cta_btn_header_href").on("input", function() {
    var newHref = $(this).val();
    $(this).parent().siblings("#_cta_btn_header_text").attr("href", newHref);
    jsonData.data._cta_btn_header_url= newHref;
  });

  //href edit #hero
  $("#_cta_btn_hero_text").click(function() {
    var href = $(this).attr("href");
    $(this).siblings(".edit-url-component").find("input").val(href);
    $(this).siblings(".edit-url-component").show();
  });
  $("#_cta_btn_hero_href").on("input", function() {
    var newHref = $(this).val();
    $(this).parent().siblings("#_cta_btn_hero_text").attr("href", newHref);
    jsonData.data._cta_btn_hero_url= newHref;
  });


  //href edit #banner
  $("#_cta_btn_banner_text").click(function() {
    var href = $(this).attr("href");
    $(this).siblings(".edit-url-component").find("input").val(href);
    $(this).siblings(".edit-url-component").show();
  });
  $("#_cta_btn_banner_href").on("input", function() {
    var newHref = $(this).val();
    $(this).parent().siblings("#_cta_btn_banner_text").attr("href", newHref);
    jsonData.data._cta_btn_banner_url= newHref;
  });


}

$(document).click(function(event) {
  if (!$(event.target).closest("#_cta_btn_header_text, #_cta_btn_hero_text, #_cta_btn_banner_text, .edit-url-component").length) {
    $(".edit-url-component").hide();
  }
});

// $("a").click(function(event) {
//     event.preventDefault();
//   });

function makeEditable(){

  $(".text-editable").editable({
    save: function(e, ui) {
      jsonData.data[$(this).attr('id')]= ui.content;
    }
  });
  $(".text-editable").on("paste", function(event) {
    event.preventDefault();
    let text = (event.originalEvent || event).clipboardData.getData('text/plain');
    document.execCommand("insertHTML", false, text);
  });

  $(".cta-editable").editable({
    content: 'span',
    autoselect:true,
    save: function(e, ui) {
      jsonData.data[$(this).attr('id')]= ui.content;
    }
  });
  $(".cta-editable").on("paste", function(event) {
    event.preventDefault();
    let text = (event.originalEvent || event).clipboardData.getData('text/plain');
    document.execCommand("insertHTML", false, text);
  });

  // $("#_hero_title").editable({
  //   save: function(e, ui) {
  //     jsonData.data._hero_title= ui.content;
  //     console.log($(this).attr('id'))
  //   }
  // });

  // $("#_hero_subtitle").editable({
  //   save: function(e, ui) {
  //     jsonData.data._hero_subtitle= ui.content;
  //   }
  // });

  // $("#_cta_btn_hero_text").editable({
  //   content: 'span',
  //   autoselect:true,
  //   save: function(e, ui) {
  //     jsonData.data._cta_btn_hero_text= ui.content;
  //   }
  // });
  
  // $("#_cta_btn_hero_subtitle").editable({
  //   save: function(e, ui) {
  //     jsonData.data._cta_btn_hero_subtitle= ui.content;
  //   }
  // });

  // $("#_product_description_title").editable({
  //   save: function(e, ui) {
  //     jsonData.data._product_description_title= ui.content;
  //   }
  // });


  // $("#_product_description_subtitle").editable({
  //   save: function(e, ui) {
  //     jsonData.data._product_description_subtitle= ui.content;
  //   }
  // });

  // $("#_feature_title_1").editable({
  //   save: function(e, ui) {
  //     jsonData.data._feature_title_1= ui.content;
  //   }
  // });

  // $("#_feature_description_1").editable({
  //   save: function(e, ui) {
  //     jsonData.data._feature_description_1= ui.content;
  //   }
  // });

  // $("#_feature_title_2").editable({
  //   save: function(e, ui) {
  //     jsonData.data._feature_title_2= ui.content;
  //   }
  // });
  
  
  // $("#_feature_description_2").editable({
  //   save: function(e, ui) {
  //     jsonData.data._feature_description_2= ui.content;
  //   }
  // });
  
  // $("#_feature_title_3").editable({
  //   save: function(e, ui) {
  //     jsonData.data._feature_title_3= ui.content;
  //   }
  // });
  
  
  // $("#_feature_description_3").editable({
  //   save: function(e, ui) {
  //     jsonData.data._feature_description_3= ui.content;
  //   }
  // });
  
  
  // $("#_cta_title_banner_text").editable({
  //   save: function(e, ui) {
  //     jsonData.data._cta_title_banner_text= ui.content;
  //   }
  // });
  
  
  // $("#_cta_btn_banner_text").editable({
  //   content: 'span',
  //   autoselect:true,
  //   save: function(e, ui) {
  //     jsonData.data._cta_btn_banner_text= ui.content;
  //   }
  // });
  
  
  // $("#_cta_btn_banner_subtitle").editable({
  //   save: function(e, ui) {
  //     jsonData.data._cta_btn_banner_subtitle= ui.content;
  //   }
  // });
  
  
  // $("#_copyright_text").editable({
  //   save: function(e, ui) {
  //     jsonData.data._copyright_text= ui.content;
  //   }
  // });
  
  
  // $("#_made_text").editable({
  //   save: function(e, ui) {
  //     jsonData.data._made_text= ui.content;
  //   }
  // });  
}


//

$("[id^='_cta_btn_']").click(function(){
  window.location.href = $(this).attr('href');
});

function setImageFeature1($image_feature_1_url) {
    $('#image_feature_1').attr('src', $image_feature_1_url);
}
function setImageFeature2($image_feature_2_url) {
    $('#image_feature_2').attr('src', $image_feature_2_url);
}
function setImageFeature3($image_feature_3_url) {
    $('#image_feature_2').attr('src', $image_feature_3_url);
}

//

$('#upload_image_feature_1').click(function() {
    $('#input_image_feature_1').click();
});

$('#upload_image_feature_2').click(function() {
    $('#input_image_feature_2').click();
});

$('#upload_image_feature_3').click(function() {
    $('#input_image_feature_3').click();
});

//

$("#input_image_feature_1").change(function() {
    // $('#data-loading').css('display', 'flex');
    var file = this.files[0];
    $.ajax({
        url: "https://fy5qv5x9hd.execute-api.us-east-1.amazonaws.com/businesses/upload",
        type: "POST",
        data: file,
        processData: false,
        timeout: 0,
        contentType: "image/png",
        headers: {
            "softr-token": $softr_token
        },              
        success: function(response) {
            setImageFeature1(response.url);
            // $('#data-loading').css('display', 'none');
        }
    });
});

//

$("#input_image_feature_2").change(function() {
    // $('#data-loading').css('display', 'flex');
    var file = this.files[0];
    $.ajax({
        url: "https://fy5qv5x9hd.execute-api.us-east-1.amazonaws.com/businesses/upload",
        type: "POST",
        data: file,
        processData: false,
        timeout: 0,
        contentType: "image/png",
        headers: {
            "softr-token": $softr_token
        },              
        success: function(response) {
            setImageFeature2(response.url);
            // $('#data-loading').css('display', 'none');
        }
    });
});

//

$("#input_image_feature_3").change(function() {
    // $('#data-loading').css('display', 'flex');
    var file = this.files[0];
    $.ajax({
        url: "https://fy5qv5x9hd.execute-api.us-east-1.amazonaws.com/businesses/upload",
        type: "POST",
        data: file,
        processData: false,
        timeout: 0,
        contentType: "image/png",
        headers: {
            "softr-token": $softr_token
        },              
        success: function(response) {
            setImageFeature3(response.url);
            // $('#data-loading').css('display', 'none');
        }
    });
});

//

$(document).ready(function() {

  window.addEventListener("message", receiveMessage, false);

  var $softr_token;
  
  function receiveMessage(event) {
    // if (event.origin !== "https://app.lindoai.com/landing/editor/beta") return;
    var data = event.data;
    $softr_token = data.data;
    jsonData.business_id = data.business_id;
    jsonData.path = data.business_id;

    $(function(){
      $("#editor-placeholder").append(editorHTML); 
    });

    $("[id^='_cta_btn_']").off("click");
    makeEditable();
    btnEditable();
    $('body').addClass('editor-active');
    $('.sidebar.left').css('display','flex');
  }
    
  // only in dev mode otherwise comment this
  // $(function(){
  //   $("#editor-placeholder").append(editorHTML); 
  // });
  // $("[id^='_cta_btn_']").off("click");
  // btnEditable();
  // makeEditable();
  // $('body').addClass('editor-active');
  
  // end of dev mode
  
  var interval = setInterval(function() {
    if ($("#editor-html").length) {
      clearInterval(interval);

      $('.sidebar.left').css('display','flex');

      $(".sidebar.left").sidebar({side: "left"});
      $('.open-settings').click(function(){
        $(".sidebar.left").trigger("sidebar:open");
      })
      $('.close-sidebar').click(function(){
        $(".sidebar.left").trigger("sidebar:close");
      })

      $("#_page_name_input").val(jsonData.data._page_name);
      $("#_page_url_input").val(jsonData.path);
      
      $("#_page_name_input").on("change", function() {
        jsonData.data._page_name = $(this).val();
      });

      $("#_page_url_input").on("change", function() {
        jsonData.path = $(this).val();
      });
              

      $("#save_changes").click(function() {
        console.log(jsonData);
        $.ajax({
          type: "POST",
          url: "",
          data: JSON.stringify(jsonData),
          contentType: "application/json; charset=utf-8",
          dataType: "json",
          headers: {
                  "softr-token": $softr_token
              },              
          success: function(data) {
            alert("Content saved successfully");
          }
        });
      });
    }
  }, 100);
    
  



});