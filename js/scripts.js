$("#basic").editable({
  multiline: true,
//  saveDelay: 800,
  save: function(e, ui) {
      alert("Saving actual content: " + ui.content);
  }
});