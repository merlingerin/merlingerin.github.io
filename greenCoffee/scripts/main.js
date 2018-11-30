$("ready", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    /**
     * SECTION 2 ANIMATIONS
     */
    var section2Animation = new TimelineMax({ ease: SlowMo.ease.config(0.4, 0.6, false) });
    var imageMan = document.querySelector(".image-man");
    var imageWoman = document.querySelector(".image-woman");
    var imageDescription_1 = document.querySelector(".description--top");
    var imageDescription_2 = document.querySelector(".description--bottom");
    var note = document.querySelectorAll(".note");
    var imageDescriptionTextLines = document.querySelectorAll(".text-line");
    var imageDescription_3 = document.querySelector(".image-man .text-line-1");
    var imageDescription_5 = document.querySelector(".image-woman .text-line-1");
    var imageDescriptionLine2 = document.querySelectorAll(".text-line-2");
    section2Animation.to(note, 0, { opacity: 0, yPercent: -200 });
    section2Animation.to(imageDescriptionTextLines, 0, { width: 0, opacity: 0 });

    var addAnimationToImage = item => {
        if (!item) return;
        return $(item).addClass("inViewport");
    };
    // ============================================================
    inViewport(imageWoman, item => {
        addAnimationToImage(item);
        addAnimationToImage(imageMan);
        section2Animation.to(imageDescription_1, 1, { opacity: 1, yPercent: 0 }, 1);
        section2Animation.to(imageDescription_3, 1, { width: "50%", opacity: 1 }, 2.5);
        section2Animation.to(imageDescription_5, 1, { width: "62%", opacity: 1 }, 2.5);
        section2Animation.to(imageDescription_2, 1, { opacity: 1, yPercent: 0 }, 4);
        section2Animation.to(imageDescriptionLine2, 1, { width: "50%", opacity: 1 }, 5.5);
    });

    // ============================================================

    var textAnimation = function() {
        const words = $(".swiper-slide-active .ml12");
        const section = $(".swiper-slide-active");

        if (!section.hasClass("activated")) {
            words.map((key, item) => {
                $(item).wrap('<span class="new"></span>');
                TweenLite.to(item, key / 3 + 0.7, { right: 0, opacity: 1, rotationY: 0 });
            });
            section.addClass("activated");
        }
    };

    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;
    const aspectRation = winWidth / winHeight;

    window.mySwiper = new Swiper("#body-swiper", {
        freeMode: true,
        setWrapperSize: true,
        direction: "horizontal",
        slidesPerView: "auto",
        simulateTouch: false,
        resistance: true,
        resistanceRatio: 0,
        mousewheel: {
            sensitivity: 1
        },
        breakpoints: {
            767: {
                direction: "vertical"
            }
        }
    });
    window.mySwiper2 = new Swiper("#swiper-statistics", {
        freeMode: false,
        setWrapperSize: true,
        direction: "horizontal",
        slidesPerView: 1,
        simulateTouch: false,
        resistance: false,
        resistanceRatio: 0,
        loop: true,
        // effect: 'fade',
        speed: 1000,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        slideActiveClass: "swiper2-slide-active",
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
            renderBullet: function(index, className) {
                return '<span class="' + className + '">0' + (index + 1) + "</span>";
            }
        }
    });

    window.mySwiper.on("slideChange", function() {
        console.log("Work");
        setTimeout(() => {
            textAnimation();
        }, 500);
        mySwiper.update();
    });

    // We listen to the resize event
    window.addEventListener("resize", () => {
        window.mySwiper.update();
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
        setTimeout(() => {
            window.mySwiper.update();
            window.mySwiper.update();
            window.mySwiper.update();
        }, 1000);
    });
    window.addEventListener("orientationchange", () => {
        window.mySwiper.update();

        setTimeout(() => {
            const currentWinWidth = window.innerWidth;

            if ((winWidth >= 768 && currentWinWidth < 768) || (winWidth < 768 && currentWinWidth >= 768)) {
                window.location.reload();
            }
            window.mySwiper.update();
            window.mySwiper.update();
            window.mySwiper.update();
        }, 1000);
    });

    new jBox("Modal", {
        attach: ".button__to-order",
        title: "Заполните форму и мы свяжемся с вами",
        content:
            '<div class="modal__content"><form action="#" id="modal-form" method="post"><input type="text" id="input-name" name="name" placeholder="Имя"><input type="tel" id="input-tel" name="tel" placeholder="Телефон"><input type="submit" value="Отправить"></form></div>',
        onCreated: function() {
            const inputName = $("#input-name");
            const inputTel = $("#input-tel");
            inputName.add(inputTel).on("input", e => {
                const target = e.target;
                const value = target && target.value;

                if (value && value.length > 0) {
                    return $(target).addClass("filled");
                }
                return $(target).removeClass("filled");
            });
        },
        onClose: function() {
            if (window.mySwiper) {
                mySwiper.update();
            }
        }
    });

    /**
     * Preloader
     */
    try {
        var decoration = document.getElementById("logo__decoration");
        var logLink = document.getElementById("logo__link");
        var preloader = document.getElementById("preloader");
        var openMenu = document.getElementById("menu-open");
        var menuEl = document.getElementById("menu");
        var closeMenu = document.getElementById("menu-close");
        var menuAn = new TimelineMax({ ease: SlowMo.ease.config(0.4, 0.6, false) });

        menuAn.to(menuEl, 1, { xPercent: -100, ease: SlowMo.ease.config(0.4, 0.6, false) });
        openMenu.addEventListener("click", function() {
            const that = $(this);
            if (that.hasClass("active")) {
                that.removeClass("active");
                window.mySwiper.mousewheel.enable();
                window.mySwiper.allowTouchMove = true;
                return menuAn.to(menuEl, 1, { xPercent: -100, ease: Expo.easeOut });
            }
            that.addClass("active");
            window.mySwiper.allowTouchMove = false;
            window.mySwiper.mousewheel.disable();
            return menuAn.to(menuEl, 1, { xPercent: 0, ease: Expo.easeOut });
        });

        closeMenu.addEventListener("click", function() {
            window.mySwiper.mousewheel.enable();
            window.mySwiper.allowTouchMove = true;
            menuAn.to(menuEl, 1, { xPercent: -100, ease: SlowMo.ease.config(0.4, 0.6, false) });
        });

        window.addEventListener("scroll", event => {
            e.preventDefault();
        });

        /**
        |--------------------------------------------------
        | MENU LOGIC
        |--------------------------------------------------
        */
        const menuItems = $(".menu__list li");
        menuItems.on("click", event => {
            const target = event.currentTarget;
            $(openMenu).removeClass("active");
            var index = $(target).index() === 0 ? $(target).index() : $(target).index() + 1;
            mySwiper.slideTo(index, 500);
            mySwiper.update();
        });
        // ============================================================

        // var tl = new TimelineMax({ repeat: 30, repeatDelay: 1 });
        var tl = new TimelineMax();
        var tpreloader = new TimelineMax();

        var onLoaded = function() {
            tpreloader.to(preloader, 1, { css: { scaleX: 0.5, xPercent: 60, opacity: 0 }, onComplete: textAnimation });
            tpreloader.to(preloader, 0.1, { css: { display: "none" } });
        };
        tl.to(decoration, 1, { xPercent: 0 });
        tl.to(decoration, 1, { xPercent: 100 });
        tl.to(decoration, 0.1, { scaleX: 0 });
        tl.to(decoration, 0.1, { xPercent: -100 });
        tl.to(decoration, 1, { scaleX: 1 });
        tl.to(decoration, 1, { xPercent: 0 });

        $("load", () => {
            tl.to(decoration, 0.3, { css: { xPercent: 0 }, onComplete: onLoaded });
        });
    } catch (err) {
        if (err) {
            var preloader = document.getElementById("preloader");
            preloader.style.display = "none";
        }
    }
    // ============================================================

    /**
    |--------------------------------------------------
    | CARD ANIMATION
    |--------------------------------------------------
    */
    const card = $(".card");

    if (winWidth < 768) {
        card.on("click", event => {
            const target = $(event.currentTarget);
            $(".card.active")
                .not(target)
                .removeClass("active");

            if (!target.hasClass("active")) {
                const elem = $(event.currentTarget).children(".card__image");
                const image = elem.children("img");
                const imageWidth = image.width();
                TweenLite.to(elem, 0.5, { width: `${imageWidth}px` });
                target.addClass("active");
                mySwiper.update();
            } else {
                const elem = $(event.currentTarget).children(".card__image");

                TweenLite.to(elem, 0.5, { width: `0px` });
                target.removeClass("active");
                mySwiper.update();
            }
        });
    } else {
        card.on("mouseenter", event => {
            const target = $(event.currentTarget);

            if (!target.hasClass("active")) {
                const elem = $(event.currentTarget).children(".card__image");
                const image = elem.children("img");
                const imageWidth = image.width();

                TweenLite.to(elem, 0.5, { width: `${imageWidth}px` });
                target.addClass("active");
                mySwiper.update();
            }
        });

        card.on("mouseleave", event => {
            const target = $(event.currentTarget);
            target.removeClass("active");
            const elem = $(event.currentTarget).children(".card__image");

            TweenLite.to(elem, 0.5, { width: `0px` });
            mySwiper.update();
        });
    }
});
