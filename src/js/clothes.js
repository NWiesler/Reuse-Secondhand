
$(function() {
    var scrollMagicController = new ScrollMagic;
    $(window).load(function() {

        // build scene
        var animate = new ScrollScene({
                triggerElement: '#animate',
            })
            .setTween(new TimelineMax().add([
                TweenLite.from(".animate .jacket", 1, { y: -70, opacity: 0 }),
            ]))
        animate.addTo(scrollMagicController)
            //main.addIndicators();
    });});
