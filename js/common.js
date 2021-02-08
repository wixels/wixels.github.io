// svg icons support ie11
(function () {
    svg4everybody();
})();

// check if touch device
function isTouchDevice() {
    var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
    var mq = function mq(query) {
        return window.matchMedia(query).matches;
    };
    if ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch) {
        return true;
    }
    var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
    return mq(query);
}

if (isTouchDevice()) {
    $('body').addClass('touch-device');
}

// header
(function () {
    var header = $('.js-header'),
        burger = header.find('.js-header-burger'),
        wrapper = header.find('.js-header-wrapper'),
        html = $('html'),
        body = $('body');
    burger.on('click', function () {
        burger.toggleClass('active');
        wrapper.toggleClass('visible');
        html.toggleClass('no-scroll');
        body.toggleClass('no-scroll');
    });
})();

(function () {
    var menuItems = $('.js-clickable'),
        burger = $('.js-header-burger'),
        wrapper = $('.js-header-wrapper'),
        html = $('html'),
        body = $('body');
    menuItems.on('click', function () {
        burger.removeClass('active');
        wrapper.removeClass('visible');
        html.removeClass('no-scroll');
        body.removeClass('no-scroll');
    });
})();
// carousel arrows
var navArrows = ['\n    <span><svg class="icon icon-arrow-prev">\n        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-prev"></use>\n    </svg></span>', '<span><svg class="icon icon-arrow-next">\n        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-next"></use>\n    </svg></span>'];

// owl carousel
$(document).ready(function () {
    var slider = $('.js-slider-details');

    slider.owlCarousel({
        items: 3,
        nav: true,
        navElement: 'button',
        navText: navArrows,
        dots: false,
        loop: true,
        smartSpeed: 700,
        responsive: {
            320: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            }
        }
    });

    // slider.on('changed.owl.carousel', function(event) {
    //     const items = slider.find('.owl-item');
    //     items.removeClass('left');
    //     items.eq(event.item.index).prevAll().addClass('left');

    // });

    // $(document).on('click', '.owl-item', function(){
    //     itemsIndex = $(this).index();
    //     slider.trigger('to.owl.carousel', itemsIndex);
    // });

    $('.js-slider-review').owlCarousel({
        items: 1,
        nav: true,
        navElement: 'button',
        navText: navArrows,
        dots: false,
        loop: true,
        smartSpeed: 700,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            320: {
                nav: false,
                dots: true
            },
            768: {
                nav: true,
                dots: false
            }
        }
    });
    $('.js-slider-tech').owlCarousel({
        items: 1,
        nav: true,
        navElement: 'button',
        navText: navArrows,
        dots: false,
        loop: true,
        smartSpeed: 700,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            320: {
                nav: false,
                dots: true,
                items: 1
            },
            768: {
                nav: true,
                dots: false,
                items: 2
            }
        }
    });

    $('.js-slider-cases').owlCarousel({
        items: 2,
        nav: true,
        navElement: 'button',
        navText: navArrows,
        dots: false,
        loop: true,
        smartSpeed: 700,
        responsive: {
            320: {
                nav: false,
                dots: true,
                items: 1
            },
            768: {
                nav: true,
                dots: false,
                items: 2
            }
        }
    });
});

// owl carousel
(function () {
    var slider = $('.js-owl');
    if (slider.length) {
        slider.each(function () {
            var _this = $(this),
                itemsMobileAlbum = _this.data('items-mobile-album'),
                itemsMobilePortrait = _this.data('items-mobile-portrait');
            console.log(itemsMobileAlbum);
            if (itemsMobileAlbum && itemsMobilePortrait) {
                owlMobileAlbum(_this, itemsMobileAlbum, itemsMobilePortrait);
                $(window).resize(function () {
                    owlMobileAlbum(_this, itemsMobileAlbum, itemsMobilePortrait);
                });
            }
            if (!itemsMobileAlbum && itemsMobilePortrait) {
                owlMobilePortrait(_this, itemsMobilePortrait);
                $(window).resize(function () {
                    owlMobilePortrait(_this, itemsMobilePortrait);
                });
            }
        });
    }

    // mobile album
    function owlMobileAlbum(obj, itemsMobileAlbum, itemsMobilePortrait) {
        var optionLoop = true;
        if (obj.is('[data-no-loop]')) {
            optionLoop = false;
        }
        var optionAutoHeight = false;
        if (obj.is('[data-autoheight]')) {
            optionAutoHeight = true;
        }
        var fullWidth = window.innerWidth;
        if (navigator.platform.indexOf('Win') > -1) {
            var mobilePoint = 766; // windows
        } else {
            var mobilePoint = 767; // mac os
        }
        // console.log(mobilePoint);
        if (fullWidth <= mobilePoint) {
            if (!obj.hasClass('owl-carousel')) {
                obj.addClass('owl-carousel');
                obj.owlCarousel({
                    items: itemsMobileAlbum,
                    nav: false,
                    dots: true,
                    loop: optionLoop,
                    smartSpeed: 600,
                    autoHeight: optionAutoHeight,
                    responsive: {
                        0: {
                            items: itemsMobilePortrait
                        },
                        480: {
                            items: itemsMobileAlbum
                        }
                    }
                });
            }
        } else {
            obj.removeClass('owl-carousel');
            obj.trigger('destroy.owl.carousel');
        }
    }

    // mobile portrait
    function owlMobilePortrait(obj, itemsMobilePortrait) {
        var optionLoop = true;
        if (obj.is('[data-no-loop]')) {
            optionLoop = false;
        }
        var optionAutoHeight = false;
        if (obj.is('[data-autoheight]')) {
            optionAutoHeight = true;
        }
        var windowWidth = $(window).width();
        if (windowWidth <= 479) {
            if (!obj.hasClass('owl-carousel')) {
                obj.addClass('owl-carousel');
                obj.owlCarousel({
                    items: itemsMobilePortrait,
                    nav: false,
                    dots: true,
                    smartSpeed: 600,
                    loop: optionLoop,
                    autoHeight: optionAutoHeight
                });
            }
        } else {
            obj.removeClass('owl-carousel');
            obj.trigger('destroy.owl.carousel');
        }
    }
})();

// aos animation
AOS.init();

// parallax effect
(function () {
    var parallax = $('.js-parallax');
    if (parallax.length) {
        parallax.each(function () {
            var _this = $(this),
                scale = _this.data('scale'),
                orientation = _this.data('orientation');

            new simpleParallax(_this[0], {
                scale: scale,
                orientation: orientation,
                delay: .5,
                overflow: true,
                transition: 'cubic-bezier(0,0,0,1)'
            });
        });
    }
})();

// scroll to section
(function () {
    var btn = $('.js-scroll');
    btn.click(function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 1000
        });
        return false;
    });
})();

// // set the starting position of the cursor outside of the screen
//  let clientX = -100;
//   let clientY = -100;
//  const innerCursor = document.querySelector(".cursor");
//
// const initCursor = () => {
// //   // add listener to track the current mouse position
//    document.addEventListener("mousemove", e => {
//      clientX = e.clientX;
//      clientY = e.clientY;
//  });

//   // transform the innerCursor to the current mouse position
// use requestAnimationFrame() for smooth performance
// const render = () => {
// innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
//     // if you are already using TweenMax in your project, you might as well
//    // use TweenMax.set() instead
//TweenMax.set(innerCursor, {
// x: clientX,
//y: clientY
//  });

//   requestAnimationFrame(render);
// };
// requestAnimationFrame(render);
// };

// initCursor();

// Form compiler
var btnSendEmail = document.querySelector("[data-submit='sendEmail']");
if (btnSendEmail) {
    btnSendEmail.addEventListener('click', function (e) {
        e.preventDefault();
        var formData = new FormData(document.querySelector('form.contacts__form'));
        var bodyObj = {};
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = formData.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var key = _step.value;

                bodyObj[key] = formData.get(key);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        fetch('https://us-central1-wixelsdigital.cloudfunctions.net/sendEmail', {
            method: 'POST',
            body: JSON.stringify(bodyObj),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        }).then(function (response) {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(response);
        }).then(function (data) {
            console.log(data);
        }).catch(function (error) {
            console.warn('Something went wrong.', error);
        });
    });
}