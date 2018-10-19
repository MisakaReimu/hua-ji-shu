$(function() {
    $(".speedTab15").click();
    function close_pop() {
        if ($(".popboxes_close").length > 0) {
            $(".popboxes_close").click();
        }
    }
    function next(){
        if($('.current_play').find('.progressbar').width() == $('.current_play').find('.progressbar_box').width()){
            $('.current_play').nextAll('.video')[0].click();
                setTimeout(function() {
                    $(".speedTab15").click();
                },
                4000);
        }
    }
    function loop() {
        close_pop();
        next();
    }
    setInterval(loop, 10000);
});
