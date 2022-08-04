// Authors: %Author Name%

$(function() {
  // initFunctionExample();
  sliderInit();
  hamburger();
});

$(window).on('resize', function() {

});

$(window).on('load', function() {

});

/*
function initFunctionExample() {

}
*/
function sliderInit() {
  $('.js-slider').slick({
    infinite: true, 
    slidesToShow: 2,
    slidesToScroll: 1,
    appendArrows: $('.js-arrows'),
    prevArrow: `<button type="button" class="slick-prev"><svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24.5332" r="23.5" transform="rotate(-180 24 24.5332)" stroke="#07DBB4"/>
    <path d="M15.002 23.3896C14.6114 23.7801 14.6114 24.4133 15.002 24.8038L21.3659 31.1677C21.7565 31.5583 22.3896 31.5583 22.7801 31.1677C23.1707 30.7772 23.1707 30.1441 22.7801 29.7535L17.1233 24.0967L22.7801 18.4398C23.1707 18.0493 23.1707 17.4161 22.7801 17.0256C22.3896 16.6351 21.7565 16.6351 21.3659 17.0256L15.002 23.3896ZM32.2909 23.0967L15.7091 23.0967L15.7091 25.0967L32.2909 25.0967L32.2909 23.0967Z" fill="#8287F3"/>
    <path d="M15.002 23.3896C14.6114 23.7801 14.6114 24.4133 15.002 24.8038L21.3659 31.1677C21.7565 31.5583 22.3896 31.5583 22.7801 31.1677C23.1707 30.7772 23.1707 30.1441 22.7801 29.7535L17.1233 24.0967L22.7801 18.4398C23.1707 18.0493 23.1707 17.4161 22.7801 17.0256C22.3896 16.6351 21.7565 16.6351 21.3659 17.0256L15.002 23.3896ZM32.2909 23.0967L15.7091 23.0967L15.7091 25.0967L32.2909 25.0967L32.2909 23.0967Z" fill="#07DBB4"/>
    </svg>
    </button>`,
    nextArrow: `<button type="button" class="slick-next "><svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24.5332" r="23.5" stroke="#07DBB4"/>
    <path d="M32.9979 25.6768C33.3884 25.2863 33.3884 24.6531 32.9979 24.2626L26.6339 17.8987C26.2434 17.5081 25.6103 17.5081 25.2197 17.8987C24.8292 18.2892 24.8292 18.9223 25.2197 19.3129L30.8766 24.9697L25.2197 30.6266C24.8292 31.0171 24.8292 31.6503 25.2197 32.0408C25.6103 32.4313 26.2434 32.4313 26.6339 32.0408L32.9979 25.6768ZM15.709 25.9697H32.2908V23.9697H15.709V25.9697Z" fill="#07DBB4"/>
    </svg>
    </button>`,
  });
}
function hamburger() {
  const hamburger = document.querySelector('.hamburger');
  const list = document.querySelector('.l-mainNavigation');
  const header= document.querySelector('.l-siteHeader');

  hamburger.addEventListener('click', toggleClass);

  function toggleClass() {
    hamburger.classList.toggle('is-active');
    list.classList.toggle('-state-open');
    header.classList.toggle('-state-active');
    scrollDisable();
  }

  function scrollDisable() {
    if(hamburger.classList.contains('is-active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  window.onresize = function () {
    scrollDisable();
    if (window.innerWidth > 992) {
      document.querySelector('.hamburger').classList.remove('is-active');
      document.querySelector('.l-mainNavigation').classList.remove('-state-open');
    }
  };
}
