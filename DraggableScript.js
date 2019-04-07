$( function() {
  $("#googlesearchresults").draggable({containment:[2,0,1400,900]});
  $("#searchbox").draggable({containment:[0,0,1400,900]});
  $("#SocialMedia").draggable({containment:[0,0,1750,900]});
  $("#saveButton").click(function(){
      $('#googlesearchresults').draggable({disabled:true});
      $('#searchbox').draggable( { disabled: true });
      $("#SocialMedia").draggable({ disabled: true });
      document.getElementById('DraggableScript').remove();
      });
});
