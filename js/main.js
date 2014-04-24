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
            autoPlay: true
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
});
//]]>
