
  // Settings Modal
  
  $(".sidebar.left").sidebar({side: "left"});
  $('.close-sidebar').click(function(){
    $(".sidebar.left").trigger("sidebar:close");
  })
  $('.open-settings').click(function(){
    $(".sidebar.left").trigger("sidebar:open");
  })
  var jsonData2 = {
    "business_id": "",
    "template": "launch",
    "path": $('#_page_url_input').val(),
    "data": {
      "_page_name" : $('#_page_name_input').val(),
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

  console.log(jsonData2);

var jsonData = {};
// PAGE SETTINGS
jsonData["business_id"] ='';
jsonData["_page_name"] = $('#_page_name_input').val();
jsonData["_page_url"] = $('#_page_url_input').val();
// IMAGE URLs
jsonData["_image_feature_1_url"] = $('#image_feature_1').attr('src') ;
jsonData["_image_feature_2_url"] = $('#image_feature_2').attr('src') ;
jsonData["_image_feature_3_url"] = $('#image_feature_3').attr('src') ;
// CTA URL
jsonData["_cta_btn_header_url"] = $('#_cta_btn_header_text').attr('href') ;
jsonData["_cta_btn_hero_url"] = $('#_cta_btn_hero_text').attr('href') ;
jsonData["_cta_btn_banner_url"] = $('#_cta_btn_banner_text').attr('href') ;
// CTA BTN TEXTS
jsonData["_cta_btn_header_text"] = $('#_cta_btn_header_text').find('span').text();
jsonData["_cta_btn_hero_text"] = $('#_cta_btn_hero_text').find('span').text();
jsonData["_cta_btn_banner_text"] = $('#_cta_btn_banner_text').find('span').text();
// CTA EXTRA TEXTS
jsonData["_cta_btn_hero_subtitle"] = $('#_cta_btn_hero_subtitle').text();
jsonData["_cta_title_banner_text"] = $('#_cta_title_banner_text').text();
jsonData["_cta_btn_banner_subtitle"] = $('#_cta_btn_banner_subtitle').text();
// HERO TEXTS
jsonData["_hero_title"] = $('#_hero_title').text();
jsonData["_hero_subtitle"] = $('#_hero_subtitle').text();
// PRODUCT DESC TEXTS
jsonData["_product_description_title"] = $('#_product_description_title').text();
jsonData["_product_description_subtitle"] = $('#_product_description_subtitle').text();
// PRODUCT FEATURES TEXTS
jsonData["_feature_title_1"] = $('#_feature_title_1').text();
jsonData["_feature_description_1"] = $('#_feature_description_1').text();
jsonData["_feature_title_2"] = $('#_feature_title_2').text();
jsonData["_feature_description_2"] = $('#_feature_description_2').text();
jsonData["_feature_title_3"] = $('#_feature_title_3').text();
jsonData["_feature_description_3"] = $('#_feature_description_3').text();
// FOOTER TEXTS
jsonData["_copyright_text"] = $('#_copyright_text').text();
jsonData["_made_text"] = $('#_made_text').text();  


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

  $("#_test").editable({
    save: function(e, ui) {
      jsonData2.data._cta_btn_hero_subtitle= ui.content;
    }
  });
 
  $("#_cta_btn_header_text").editable({
    content: 'span',
    autoselect:true,
    save: function(e, ui) {
      jsonData2.data._cta_btn_header_text_cta_btn_hero_subtitle= ui.content;
    }
  });
  
  $("#_hero_title").editable({
    save: function(e, ui) {
      jsonData2.data._cta_btn_hero_subtitle= ui.content;
    }
  });
  
  $("#_hero_subtitle").editable({
    save: function(e, ui) {
      jsonData2.data._hero_subtitle_cta_btn_hero_subtitle= ui.content;
    }
  });
  
  $("#_cta_btn_hero_text").editable({
    content: 'span',
    autoselect:true,
    save: function(e, ui) {
      jsonData2.data._cta_btn_hero_text_cta_btn_hero_subtitle= ui.content;
    }
  });
  
  $("#_cta_btn_hero_subtitle").editable({
    save: function(e, ui) {
      jsonData2.data._cta_btn_hero_subtitle_cta_btn_hero_subtitle= ui.content;
    }
  });

  $("#_product_description_title").editable({
    save: function(e, ui) {
      jsonData2.data._product_description_title_cta_btn_hero_subtitle= ui.content;
    }
  });


  $("#_product_description_subtitle").editable({
    save: function(e, ui) {
      jsonData2.data._product_description_subtitle_cta_btn_hero_subtitle= ui.content;
    }
  });

  $("#_feature_eyebrow_1").editable({
    save: function(e, ui) {
      jsonData2.data._feature_eyebrow_1_cta_btn_hero_subtitle= ui.content;
    }
  });


  $("#_feature_title_1").editable({
    save: function(e, ui) {
      jsonData2.data._feature_title_1_cta_btn_hero_subtitle= ui.content;
    }
  });

  $("#_feature_description_1").editable({
    save: function(e, ui) {
      jsonData2.data._feature_description_1_cta_btn_hero_subtitle= ui.content;
    }
  });

  $("#_feature_eyebrow_2").editable({
    save: function(e, ui) {
      jsonData2.data._feature_eyebrow_2_cta_btn_hero_subtitle= ui.content;
    }
  });
  $("#_feature_title_2").editable({
    save: function(e, ui) {
      jsonData2.data._feature_title_2_cta_btn_hero_subtitle= ui.content;
    }
  });
  
  
  $("#_feature_description_2").editable({
    save: function(e, ui) {
      jsonData2.data._feature_description_2_cta_btn_hero_subtitle= ui.content;
    }
  });
  
  
  $("#_feature_eyebrow_3").editable({
    save: function(e, ui) {
      jsonData2.data._feature_eyebrow_3_cta_btn_hero_subtitle= ui.content;
    }
  });
  
  
  $("#_feature_title_3").editable({
    save: function(e, ui) {
      jsonData2.data._feature_title_3_cta_btn_hero_subtitle= ui.content;
    }
  });
  
  
  $("#_feature_description_3").editable({
    save: function(e, ui) {
      jsonData2.data._feature_description_3_cta_btn_hero_subtitle= ui.content;
    }
  });
  
  
  $("#_cta_title_banner_text").editable({
    save: function(e, ui) {
      jsonData2.data._cta_title_banner_text_cta_btn_hero_subtitle= ui.content;
    }
  });
  
  
  $("#_cta_btn_banner_text").editable({
    content: 'span',
    autoselect:true,
    save: function(e, ui) {
      jsonData2.data._cta_btn_banner_text_cta_btn_hero_subtitle= ui.content;
    }
  });
  
  
  $("#_cta_btn_banner_subtitle").editable({
    save: function(e, ui) {
      jsonData2.data._cta_btn_banner_subtitle_cta_btn_hero_subtitle= ui.content;
    }
  });
  
  
  $("#_copyright_text").editable({
    save: function(e, ui) {
      jsonData2.data._copyright_text_cta_btn_hero_subtitle= ui.content;
    }
  });
  
  
  $("#_made_text").editable({
    save: function(e, ui) {
      jsonData2.data._made_text_cta_btn_hero_subtitle= ui.content;
    }
  });  
}

window.addEventListener("message", receiveMessage, false);

var $softr_token;

function receiveMessage(event) {
  // if (event.origin !== "https://app.lindoai.com/landing/editor/beta") return;
  var data = event.data;
  $softr_token = data.data;
  jsonData2.business_id = data.business_id;
  makeEditable();
  btnEditable();
  $('body').addClass('editor-active');
}

//

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

$("#_page_name_input").on("change", function() {
  jsonData2.data._page_name_cta_btn_hero_subtitle = $(this).val();
});
$("#_page_url_input").on("change", function() {
  jsonData2.data._page_url_cta_btn_hero_subtitle = $(this).val();
});

$(document).ready(function() {
  // only in dev mode otherwise comment this
  // makeEditable();
  // btnEditable();
  // $('body').addClass('editor-active');
  // $('#editor-panel').css('display', 'flex')
  // end of dev mode

    console.log(jsonData);

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

});