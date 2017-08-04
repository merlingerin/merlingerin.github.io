// $(document).ready(function() {

// 	$(".form-grp").submit(function() {
// 		$.ajax({
// 			type: "GET",
// 			url: "Thanks.php",
// 			data: $(this).serialize()
// 		}).done(function() {
// 			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
// 		});
// 		return false;
// 	});

// });


$(document).ready(function() {
    try {
        (function() {
            var a = {},
                b = function(a) {
                    if (a.match(/^rgb/)) return a = a.replace(/\s+/g, "").match(/([\d\,]+)/gi)[0].split(","), (parseInt(a[0]) << 16) + (parseInt(a[1]) << 8) + parseInt(a[2]);
                    if (a.match(/^\#/)) return parseInt(a.substr(1), 16);
                    return 0
                };
            (function() {
                $('link[type="text/css"]').each(function() {
                    var b = ($(this).attr("href") || "").match(/\/?css\/([\w\-]+\.css)\?(\d+)/);
                    b && b[1] && b[2] && (a[b[1]] = b[2])
                })
            })();
            (function() {
                $("body").append('<div class="version" style="display:none; width:1px; height:1px;"></div>');
                for (var c = $(".version"), d = 0; d < Muse.assets.required.length;) {
                    var f = Muse.assets.required[d],
                        g = f.match(/([\w\-\.]+)\.(\w+)$/),
                        k = g && g[1] ? g[1] : null,
                        g = g && g[2] ? g[2] : null;
                    switch (g.toLowerCase()) {
                        case "css":
                            k = k.replace(/\W/gi, "_").replace(/^([^a-z])/gi, "_$1");
                            c.addClass(k);
                            var g = b(c.css("color")),
                                h = b(c.css("background-color"));
                            g != 0 || h != 0 ? (Muse.assets.required.splice(d, 1), "undefined" != typeof a[f] && (g != a[f] >>> 24 || h != (a[f] & 16777215)) && Muse.assets.outOfDate.push(f)) : d++;
                            c.removeClass(k);
                            break;
                        case "js":
                            k.match(/^jquery-[\d\.]+/gi) &&
                                typeof $ != "undefined" ? Muse.assets.required.splice(d, 1) : d++;
                            break;
                        default:
                            throw Error("Unsupported file type: " + g);
                    }
                }
                c.remove();
                if (Muse.assets.outOfDate.length || Muse.assets.required.length) c = "Некоторые файлы на сервере могут отсутствовать или быть некорректными. Очистите кэш-память браузера и повторите попытку. Если проблему не удается устранить, свяжитесь с разработчиками сайта.", (d = location && location.search && location.search.match && location.search.match(/muse_debug/gi)) && Muse.assets.outOfDate.length && (c += "\nOut of date: " + Muse.assets.outOfDate.join(",")), d && Muse.assets.required.length && (c += "\nMissing: " + Muse.assets.required.join(",")), alert(c)
            })()
        })(); /* body */
        Muse.Utils.transformMarkupToFixBrowserProblemsPreInit(); /* body */
        Muse.Utils.prepHyperlinks(true); /* body */
        Muse.Utils.resizeHeight('.browser_width'); /* resize height */
        Muse.Utils.requestAnimationFrame(function() {
            $('body').addClass('initialized');
        }); /* mark body as initialized */
        Muse.Utils.fullPage('#page'); /* 100% height page */
        Muse.Utils.initWidget('#widgetu7202', ['#bp_infinity'], function(elem) {
            return new WebPro.Widget.Form(elem, {
                validationEvent: 'submit',
                errorStateSensitivity: 'high',
                fieldWrapperClass: 'fld-grp',
                formSubmittedClass: 'frm-sub-st',
                formErrorClass: 'frm-subm-err-st',
                formDeliveredClass: 'frm-subm-ok-st',
                notEmptyClass: 'non-empty-st',
                focusClass: 'focus-st',
                invalidClass: 'fld-err-st',
                requiredClass: 'fld-err-st',
                ajaxSubmit: true
            });
        }); /* #widgetu7202 */
        Muse.Utils.initWidget('#pamphletu7198', ['#bp_infinity'], function(elem) {
            return new WebPro.Widget.ContentSlideShow(elem, {
                contentLayout_runtime: 'lightbox',
                event: 'click',
                deactivationEvent: 'none',
                autoPlay: false,
                displayInterval: 3000,
                transitionStyle: 'fading',
                transitionDuration: 500,
                hideAllContentsFirst: false,
                shuffle: false,
                enableSwipe: true,
                resumeAutoplay: true,
                resumeAutoplayInterval: 3000,
                playOnce: false,
                autoActivate_runtime: false
            });
        }); /* #pamphletu7198 */
        Muse.Utils.initWidget('#pamphletu6820', ['#bp_infinity'], function(elem) {
            return new WebPro.Widget.ContentSlideShow(elem, {
                contentLayout_runtime: 'lightbox',
                event: 'click',
                deactivationEvent: 'none',
                autoPlay: false,
                displayInterval: 3000,
                transitionStyle: 'fading',
                transitionDuration: 500,
                hideAllContentsFirst: false,
                shuffle: false,
                enableSwipe: true,
                resumeAutoplay: true,
                resumeAutoplayInterval: 3000,
                playOnce: false,
                autoActivate_runtime: false
            });
        }); /* #pamphletu6820 */
        Muse.Utils.initWidget('#widgetu7488', ['#bp_infinity'], function(elem) {
            return new WebPro.Widget.Form(elem, {
                validationEvent: 'submit',
                errorStateSensitivity: 'high',
                fieldWrapperClass: 'fld-grp',
                formSubmittedClass: 'frm-sub-st',
                formErrorClass: 'frm-subm-err-st',
                formDeliveredClass: 'frm-subm-ok-st',
                notEmptyClass: 'non-empty-st',
                focusClass: 'focus-st',
                invalidClass: 'fld-err-st',
                requiredClass: 'fld-err-st',
                ajaxSubmit: true
            });
        }); /* #widgetu7488 */
        Muse.Utils.initWidget('#pamphletu7484', ['#bp_infinity'], function(elem) {
            return new WebPro.Widget.ContentSlideShow(elem, {
                contentLayout_runtime: 'lightbox',
                event: 'click',
                deactivationEvent: 'none',
                autoPlay: false,
                displayInterval: 3000,
                transitionStyle: 'fading',
                transitionDuration: 500,
                hideAllContentsFirst: false,
                shuffle: false,
                enableSwipe: true,
                resumeAutoplay: true,
                resumeAutoplayInterval: 3000,
                playOnce: false,
                autoActivate_runtime: false
            });
        }); /* #pamphletu7484 */
        Muse.Utils.initWidget('#widgetu7608', ['#bp_infinity'], function(elem) {
            return new WebPro.Widget.Form(elem, {
                validationEvent: 'submit',
                errorStateSensitivity: 'high',
                fieldWrapperClass: 'fld-grp',
                formSubmittedClass: 'frm-sub-st',
                formErrorClass: 'frm-subm-err-st',
                formDeliveredClass: 'frm-subm-ok-st',
                notEmptyClass: 'non-empty-st',
                focusClass: 'focus-st',
                invalidClass: 'fld-err-st',
                requiredClass: 'fld-err-st',
                ajaxSubmit: true
            });
        }); /* #widgetu7608 */
        Muse.Utils.initWidget('#pamphletu7605', ['#bp_infinity'], function(elem) {
            return new WebPro.Widget.ContentSlideShow(elem, {
                contentLayout_runtime: 'lightbox',
                event: 'click',
                deactivationEvent: 'none',
                autoPlay: false,
                displayInterval: 3000,
                transitionStyle: 'fading',
                transitionDuration: 500,
                hideAllContentsFirst: false,
                shuffle: false,
                enableSwipe: true,
                resumeAutoplay: true,
                resumeAutoplayInterval: 3000,
                playOnce: false,
                autoActivate_runtime: false
            });
        }); /* #pamphletu7605 */
        Muse.Utils.initWidget('#widgetu4351', ['#bp_infinity'], function(elem) {
            return new WebPro.Widget.Form(elem, {
                validationEvent: 'submit',
                errorStateSensitivity: 'high',
                fieldWrapperClass: 'fld-grp',
                formSubmittedClass: 'frm-sub-st',
                formErrorClass: 'frm-subm-err-st',
                formDeliveredClass: 'frm-subm-ok-st',
                notEmptyClass: 'non-empty-st',
                focusClass: 'focus-st',
                invalidClass: 'fld-err-st',
                requiredClass: 'fld-err-st',
                ajaxSubmit: true
            });
        }); /* #widgetu4351 */
        Muse.Utils.initWidget('#widgetu6910', ['#bp_infinity'], function(elem) {
            return new WebPro.Widget.Form(elem, {
                validationEvent: 'submit',
                errorStateSensitivity: 'high',
                fieldWrapperClass: 'fld-grp',
                formSubmittedClass: 'frm-sub-st',
                formErrorClass: 'frm-subm-err-st',
                formDeliveredClass: 'frm-subm-ok-st',
                notEmptyClass: 'non-empty-st',
                focusClass: 'focus-st',
                invalidClass: 'fld-err-st',
                requiredClass: 'fld-err-st',
                ajaxSubmit: true
            });
        }); /* #widgetu6910 */
        Muse.Utils.initWidget('#pamphletu4491', ['#bp_infinity'], function(elem) {
            return new WebPro.Widget.ContentSlideShow(elem, {
                contentLayout_runtime: 'stack',
                event: 'click',
                deactivationEvent: '',
                autoPlay: true,
                displayInterval: 3000,
                transitionStyle: 'fading',
                transitionDuration: 500,
                hideAllContentsFirst: false,
                shuffle: false,
                enableSwipe: true,
                resumeAutoplay: false,
                resumeAutoplayInterval: 3000,
                playOnce: false,
                autoActivate_runtime: false
            });
        }); /* #pamphletu4491 */
        Muse.Utils.initWidget('#pamphletu4602', ['#bp_infinity'], function(elem) {
            return new WebPro.Widget.ContentSlideShow(elem, {
                contentLayout_runtime: 'stack',
                event: 'click',
                deactivationEvent: 'none',
                autoPlay: false,
                displayInterval: 3000,
                transitionStyle: 'fading',
                transitionDuration: 500,
                hideAllContentsFirst: false,
                shuffle: false,
                enableSwipe: true,
                resumeAutoplay: false,
                resumeAutoplayInterval: 3000,
                playOnce: false,
                autoActivate_runtime: false
            });
        }); /* #pamphletu4602 */
        Muse.Utils.initWidget('#widgetu4817', ['#bp_infinity'], function(elem) {
            return new WebPro.Widget.Form(elem, {
                validationEvent: 'submit',
                errorStateSensitivity: 'high',
                fieldWrapperClass: 'fld-grp',
                formSubmittedClass: 'frm-sub-st',
                formErrorClass: 'frm-subm-err-st',
                formDeliveredClass: 'frm-subm-ok-st',
                notEmptyClass: 'non-empty-st',
                focusClass: 'focus-st',
                invalidClass: 'fld-err-st',
                requiredClass: 'fld-err-st',
                ajaxSubmit: true
            });
        }); /* #widgetu4817 */
        Muse.Utils.initWidget('#pamphletu3588', ['#bp_infinity'], function(elem) {
            return new WebPro.Widget.ContentSlideShow(elem, {
                contentLayout_runtime: 'lightbox',
                event: 'click',
                deactivationEvent: 'none',
                autoPlay: false,
                displayInterval: 3000,
                transitionStyle: 'fading',
                transitionDuration: 500,
                hideAllContentsFirst: false,
                shuffle: false,
                enableSwipe: true,
                resumeAutoplay: true,
                resumeAutoplayInterval: 3000,
                playOnce: false,
                autoActivate_runtime: false
            });
        }); /* #pamphletu3588 */
        Muse.Utils.initWidget('#widgetu7014', ['#bp_infinity'], function(elem) {
            return new WebPro.Widget.Form(elem, {
                validationEvent: 'submit',
                errorStateSensitivity: 'high',
                fieldWrapperClass: 'fld-grp',
                formSubmittedClass: 'frm-sub-st',
                formErrorClass: 'frm-subm-err-st',
                formDeliveredClass: 'frm-subm-ok-st',
                notEmptyClass: 'non-empty-st',
                focusClass: 'focus-st',
                invalidClass: 'fld-err-st',
                requiredClass: 'fld-err-st',
                ajaxSubmit: true
            });
        }); /* #widgetu7014 */
        Muse.Utils.initWidget('#pamphletu7011', ['#bp_infinity'], function(elem) {
            return new WebPro.Widget.ContentSlideShow(elem, {
                contentLayout_runtime: 'lightbox',
                event: 'click',
                deactivationEvent: 'none',
                autoPlay: false,
                displayInterval: 3000,
                transitionStyle: 'fading',
                transitionDuration: 500,
                hideAllContentsFirst: false,
                shuffle: false,
                enableSwipe: true,
                resumeAutoplay: true,
                resumeAutoplayInterval: 3000,
                playOnce: false,
                autoActivate_runtime: false
            });
        }); /* #pamphletu7011 */
        Muse.Utils.showWidgetsWhenReady(); /* body */
        Muse.Utils.transformMarkupToFixBrowserProblems(); /* body */
    } catch (e) {
        if (e && 'function' == typeof e.notify) e.notify();
        else Muse.Assert.fail('Error calling selector function:' + e);
    }
});