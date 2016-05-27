(function($) {
    'use strict';

    // document load event
    $(document).ready(function() {

       $('.swiper-container.__carousel').swiper({
          // Optional parameters
          direction: 'horizontal',
          loop: true,
          slidesPerView: 4,
          spaceBetween: 30,
          roundLengths: true,
          pagination: '.swiper-pagination.__carousel',
          prevButton: '.swiper-button-prev.__carousel',
          nextButton: '.swiper-button-next.__carousel',

          // Responsive breakpoints
          breakpoints: {

              767: {
                slidesPerView: 1,
                spaceBetweenSlides: 10
              },
              992: {
                  slidesPerView: 2,
                  spaceBetween: 10
              }
            }
        });
    });

})(jQuery);
