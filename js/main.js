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
    $("#yesbtn").click(function() {
        $.get("http://marklv.jd-app.com/index?stage=yes&answer=yes");
        alert("Thank you,my gril. You have a boy friend now.");
        alert("怎么开始交往呢？唔，回复我一个“hi”怎么样？");
    });
    $("#irgnorebtn").click(function() {
        $.get("http://marklv.jd-app.com/index?stage=yes&answer=ignore");
        alert("眼泪花花+眼泪哗哗，祝你幸福！\nBut，既然没有点击No，说明还有机会，是吧？！");
        window.close();
    });
    $("#nobtn").click(function() {
        $.get("http://marklv.jd-app.com/index?stage=yes&answer=no");
        alert("眼泪花花+眼泪哗哗。既然做不成男女朋友，祝你幸福……\n但是在你没有最爱并让你的幸福另一半的另一半前，我将不会放弃！temporary Bye!");
        window.close();
    });
    //更换背景图片
    var mainWrapper_jq = $("#main-wrapper");
    var bgcount = 0;
    var bgs = new Array('url(img/bg0.jpg)', 'url(img/bg1.jpg)', 'url(img/bg2.jpg)', 'url(img/bg3.jpg)');

    function changeBg() {
        bgcount++;
        bgcount = bgcount % 4;
        // alert(bgs[bgcount]);
        mainWrapper_jq.css('background-image', bgs[bgcount]);
    }
    setInterval(changeBg, 30000);
});
//]]>
