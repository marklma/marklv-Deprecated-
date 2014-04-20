//<![CDATA[
$(document).ready(function() {
    var jcp_pause = $(".jp-pause");
    var jcp_play = $(".jp-play");
    new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer_1",
        cssSelectorAncestor: "#jp_container_1"
    }, [{
        title: "Kiss The Rain",
        mp3: "http://marklv.qiniudn.com/KissTheRain.mp3",
        ogg: "http://marklv.qiniudn.com/KissTheRain.ogg"
    }, {
        title: "could this be love",
        mp3: "http://marklv.qiniudn.com/couldthisbelove.mp3",
        ogg: "http://marklv.qiniudn.com/couldthisbelove.ogg"
    }, {
        title: "First Love",
        mp3: "http://marklv.qiniudn.com/FirstLove.mp3",
        ogg: "http://marklv.qiniudn.com/FirstLove.ogg"
    }, {
        title: "なきむし。",
        mp3: "http://marklv.qiniudn.com/marklv1.mp3",
        ogg: "http://marklv.qiniudn.com/marklv1.ogg"
    }, {
        title: "安妮的仙境",
        mp3: "http://marklv.qiniudn.com/annidexianjing.mp3",
        ogg: "http://marklv.qiniudn.com/annidexianjing.ogg"
    }], {
        playlistOptions: {
            autoPlay: true
        },
        swfPath: "js",
        supplied: "mp3,ogg",
        preload: "auto",
        wmode: "window",
        solution: "flash,html"
    });
});
//]]>
