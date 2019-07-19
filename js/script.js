
$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();

        $('.containerhome img').css({
        opacity: function() {
            var elementHeight = $(this).height(),
            opacity = ((elementHeight - scrollTop) / elementHeight);
            return opacity;
        }
    });
});
