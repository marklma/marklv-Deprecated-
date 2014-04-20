//<![CDATA[
$(document).ready(function() {
    var jcp_pause = $(".jp-pause");
    var jcp_play = $(".jp-play");
    new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer_1",
        cssSelectorAncestor: "#jp_container_1"
    }, [{
        title: "Cro Magnon Man",
        mp3: "dd.mp3"
    }, {
        title: "Cyber Sonnet",
        mp3: "//marklv.qiniudn.com/marklv1.mp3",
        oga: "//marklv.qiniudn.com/marklv1.ogg"
    }, {
        title: "Your Face",
        mp3: "d2.mp3"
    }], {
        swfPath: "js",
        supplied: "mp3,oga"
    });
});
//]]>
