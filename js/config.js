$.getJSON("/js/config.json", function(data) {
  var tier = data.tier;
  if (tier === "premium") {
    $(".lindo-badge").hide();
  }
});
