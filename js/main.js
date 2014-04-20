//<![CDATA[
$(document).ready(function() {
    var jcp_pause = $(".jp-pause");
    var jcp_play = $(".jp-play");
    new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer_1",
        cssSelectorAncestor: "#jp_container_1"
    }, [{
        title: "First Love",
        mp3: "http://marklv.qiniudn.com/FirstLove.mp3",
        oga: "http://marklv.qiniudn.com/FirstLove.ogg"
    }, {
        title: "なきむし。",
        mp3: "//marklv.qiniudn.com/marklv1.mp3",
        oga: "//marklv.qiniudn.com/marklv1.ogg"
    }, {
        title: "ddl",
        mp3: "dd.mp3"
    }], {
        swfPath: "js",
        supplied: "mp3,oga"
    });
});
//]]>
