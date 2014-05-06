//<![CDATA[
$(function() {
  $(".bar").show();
  var shapeblue_jq = $("#shapeblue");
  var shapepink_jq = $("#shapepink");
  shapeblue_jq.css("left", ($(window).width() / 2) - shapeblue_jq.width());
  var bluepos = shapeblue_jq.position();
  var movex = shapeblue_jq.width() + 4;
  shapepink_jq.css("left", bluepos.left + movex);

  function moveleft(el) {
    el.animate({
      left: '+=' + movex
    }, 800, function() {
      el.css("z-index", "-100");
    });
  }

  function moveright(el) {
    el.animate({
      left: '-=' + movex
    }, 800, function() {
      el.css("z-index", "100");
    });
  }

  function playAnimation() {
    moveleft(shapeblue_jq);
    moveright(shapeblue_jq);
    moveright(shapepink_jq);
    moveleft(shapepink_jq);
  }
  setInterval(playAnimation, 100);
});
//]]>
