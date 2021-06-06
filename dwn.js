jQuery(document).ready(function() {
    var sec = 20
    var timer = setInterval(function() {
       $("#mdtimer span").text(sec--);
       if (sec == 0) {
    $("#makingdifferenttimer").delay(1000).fadeIn(1000);
    $("#mdtimer").hide(1000) .fadeOut(fast);}
    },1000);
    });
