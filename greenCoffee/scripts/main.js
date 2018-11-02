$("ready", () => {
    var decoration = document.getElementById("logo__decoration");
    var logLink = document.getElementById("logo__link");
    var preloader = document.getElementById("preloader");

    // var tl = new TimelineMax({ repeat: 30, repeatDelay: 1 });
    var tl = new TimelineMax();
    var tpreloader = new TimelineMax();

    var onLoaded = function() {
        tpreloader.to(preloader, 1, { css: { scaleX: 0 } });
    };
    tl.to(decoration, 1, { xPercent: 0 });
    tl.to(decoration, 1, { xPercent: 100 });
    tl.to(decoration, 0.1, { scaleX: 0 });
    tl.to(decoration, 0.1, { xPercent: -100 });
    tl.to(decoration, 1, { scaleX: 1 });
    tl.to(decoration, 1, { xPercent: 0 });
    tl.to(decoration, 0.3, { css: { xPercent: 0 }, onComplete: onLoaded });
});
