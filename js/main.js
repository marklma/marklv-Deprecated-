//<![CDATA[
$(function() {
  new jPlayerPlaylist({
    jPlayer: "#jquery_jplayer_1",
    cssSelectorAncestor: "#jp_container_1"
  }, [{
    title: "Kiss The Rain",
    mp3: "http://marklv.qiniudn.com/resource/KissTheRain.mp3",
    oga: "http://marklv.qiniudn.com/resource/KissTheRain.ogg"
  }, {
    title: "could this be love",
    mp3: "http://marklv.qiniudn.com/resource/couldthisbelove.mp3",
    oga: "http://marklv.qiniudn.com/resource/couldthisbelove.ogg"
  }, {
    title: "第一次",
    mp3: "http://marklv.qiniudn.com/resource/firsttime.mp3",
    oga: "http://marklv.qiniudn.com/resource/firsttime.ogg"
  }, {
    title: "First Love",
    mp3: "http://marklv.qiniudn.com/resource/FirstLove.mp3",
    oga: "http://marklv.qiniudn.com/resource/FirstLove.ogg"
  }, {
    title: "なきむし。",
    mp3: "http://marklv.qiniudn.com/resource/marklv1.mp3",
    oga: "http://marklv.qiniudn.com/resource/marklv1.ogg"
  }, {
    title: "安妮的仙境",
    mp3: "http://marklv.qiniudn.com/resource/annidexianjing.mp3",
    oga: "http://marklv.qiniudn.com/resource/annidexianjing.ogg"
  }], {
    playlistOptions: {
      autoPlay: false
    },
    swfPath: "js",
    supplied: "mp3, oga",
    preload: "auto",
    wmode: "window"
  });
  $('[data-jcarousel]').each(function() {
    var el = $(this);
    el.jcarousel(el.data());
  });
  $('[data-jcarousel-control]').each(function() {
    var el = $(this);
    el.jcarouselControl(el.data());
  });
  //更换背景图片
  var mainWrapper_jq = $("#main-wrapper");
  var bgcount = 0;
  var bgs = new Array('url(img/bg0.jpg)', 'url(img/bg1.jpg)');

  function changeBg() {
    bgcount++;
    bgcount = bgcount % 2;
    // alert(bgs[bgcount]);
    mainWrapper_jq.css('background-image', bgs[bgcount]);
  }
  setInterval(changeBg, 30000);
});
//]]>
