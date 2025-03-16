const swiper = new Swiper('.slider-wrapper', {

    loop: true,
    grabCursor: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0:{
          sliderPerView:1  
        },
        768:{
            sliderPerView:2
        },
        1024:{
            sliderPerView:3
        }
    }
  
    
  });