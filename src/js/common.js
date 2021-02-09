// svg icons support ie11
(function () {
  svg4everybody()
}())

// check if touch device
function isTouchDevice () {
  const prefixes = ' -webkit- -moz- -o- -ms- '.split(' ')
  const mq = function (query) {
    return window.matchMedia(query).matches
  }
  if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
    return true
  }
  const query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('')
  return mq(query)
}

if (isTouchDevice()) {
  $('body').addClass('touch-device')
}

// header
(function () {
  const header = $('.js-header')
    	  const burger = header.find('.js-header-burger')
    	  const wrapper = header.find('.js-header-wrapper')
	      const html = $('html')
	      const body = $('body')
  burger.on('click', function () {
    burger.toggleClass('active')
    wrapper.toggleClass('visible')
    html.toggleClass('no-scroll')
    body.toggleClass('no-scroll')
  })
}());

(function () {
  const menuItems = $('.js-clickable')
    	  const burger = $('.js-header-burger')
    	  const wrapper = $('.js-header-wrapper')
	      const html = $('html')
	      const body = $('body')
  menuItems.on('click', function () {
    burger.removeClass('active')
    wrapper.removeClass('visible')
    html.removeClass('no-scroll')
    body.removeClass('no-scroll')
  })
}())
// carousel arrows
const navArrows = [`
    <span><svg class="icon icon-arrow-prev">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-prev"></use>
    </svg></span>`,
    `<span><svg class="icon icon-arrow-next">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-next"></use>
    </svg></span>`]

// owl carousel
$(document).ready(function () {
  const slider = $('.js-slider-details')

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
  })

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
  })
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
  })

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
  })
});

// owl carousel
(function () {
  const slider = $('.js-owl')
  if (slider.length) {
    slider.each(function () {
      const _this = $(this)
      const itemsMobileAlbum = _this.data('items-mobile-album')
      const itemsMobilePortrait = _this.data('items-mobile-portrait')
      console.log(itemsMobileAlbum)
      if (itemsMobileAlbum && itemsMobilePortrait) {
        owlMobileAlbum(_this, itemsMobileAlbum, itemsMobilePortrait)
        $(window).resize(function () {
          owlMobileAlbum(_this, itemsMobileAlbum, itemsMobilePortrait)
        })
      }
      if (!itemsMobileAlbum && itemsMobilePortrait) {
        owlMobilePortrait(_this, itemsMobilePortrait)
        $(window).resize(function () {
          owlMobilePortrait(_this, itemsMobilePortrait)
        })
      }
    })
  }

  // mobile album
  function owlMobileAlbum (obj, itemsMobileAlbum, itemsMobilePortrait) {
    let optionLoop = true
    if (obj.is('[data-no-loop]')) {
      optionLoop = false
    }
    let optionAutoHeight = false
    if (obj.is('[data-autoheight]')) {
      optionAutoHeight = true
    }
    const fullWidth = window.innerWidth
    if (navigator.platform.indexOf('Win') > -1) {
      var mobilePoint = 766 // windows
    } else {
      var mobilePoint = 767 // mac os
    }
    // console.log(mobilePoint);
    if (fullWidth <= mobilePoint) {
      if (!obj.hasClass('owl-carousel')) {
        obj.addClass('owl-carousel')
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
        })
      }
    } else {
      obj.removeClass('owl-carousel')
      obj.trigger('destroy.owl.carousel')
    }
  }

  // mobile portrait
  function owlMobilePortrait (obj, itemsMobilePortrait) {
    let optionLoop = true
    if (obj.is('[data-no-loop]')) {
      optionLoop = false
    }
    let optionAutoHeight = false
    if (obj.is('[data-autoheight]')) {
      optionAutoHeight = true
    }
    const windowWidth = $(window).width()
    if (windowWidth <= 479) {
      if (!obj.hasClass('owl-carousel')) {
        obj.addClass('owl-carousel')
        obj.owlCarousel({
          items: itemsMobilePortrait,
          nav: false,
          dots: true,
          smartSpeed: 600,
          loop: optionLoop,
          autoHeight: optionAutoHeight
        })
      }
    } else {
      obj.removeClass('owl-carousel')
      obj.trigger('destroy.owl.carousel')
    }
  }
}())

// aos animation
AOS.init();

// parallax effect
(function () {
  const parallax = $('.js-parallax')
  if (parallax.length) {
    parallax.each(function () {
      const _this = $(this)
      const scale = _this.data('scale')
      const orientation = _this.data('orientation')

      new simpleParallax(_this[0], {
        scale: scale,
        orientation: orientation,
        delay: 0.5,
        overflow: true,
        transition: 'cubic-bezier(0,0,0,1)'
      })
    })
  }
}());

// scroll to section
(function () {
  const btn = $('.js-scroll')
  btn.click(function () {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top + 'px'
    }, {
      duration: 1000
    })
    return false
  })
}())

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
// TweenMax.set(innerCursor, {
// x: clientX,
// y: clientY
//  });

//   requestAnimationFrame(render);
// };
// requestAnimationFrame(render);
// };

// initCursor();

function validateEmail (email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
}

// Form compiler
const btnSendEmail = document.querySelector("[data-submit='sendEmail']")
if (btnSendEmail) {
  btnSendEmail.addEventListener('click', function (e) {
    e.preventDefault()
    const responseTextEl = document.querySelector('.contacts__feedback .feedback__text')
    const formEL = document.querySelector('form.contacts__form')
    responseTextEl.classList.remove('success')
    responseTextEl.innerText = 'Making contact...'
    const formData = new FormData(formEL)
    const bodyObj = {}
    for (const key of formData.keys()) {
      bodyObj[key] = formData.get(key)
    }
    if (validateEmail(bodyObj.email)) {
      fetch('https://us-central1-wixelsdigital.cloudfunctions.net/sendEmail', {
        method: 'POST',
        body: JSON.stringify(bodyObj),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        }
      }).then(function (response) {
        if (response.ok) {
          return response.json()
        }
        return Promise.reject(response)
      }).then(function (data) {
        console.log(data)
        formEL.reset()
        responseTextEl.innerText = 'Succesfully connected with the Wixels team, we look forward to chatting soon.'
        responseTextEl.classList.add('success')
        setTimeout(() => {
          responseTextEl.innerText = ''
          responseTextEl.classList.remove('success')
        }, 4000)
      }).catch(function (error) {
        responseTextEl.innerText = 'Ah something went wrong, please try again.'
        responseTextEl.classList.add('fail')
        setTimeout(() => {
          responseTextEl.innerText = ''
          responseTextEl.classList.remove('fail')
        }, 4000)
        console.warn('Something went wrong.', error)
      })
    } else {
      responseTextEl.innerText = 'Please use valid email address'
      responseTextEl.classList.add('fail')
    }
  })
}
