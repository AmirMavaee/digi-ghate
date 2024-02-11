const swiper = new Swiper('.headerSlider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});

const specialSwiper = new Swiper('.mySpecialSaleSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.special-next',
        prevEl: '.special-prev',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

const MostSwiper = new Swiper('.myMostSaleSwiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
        nextEl: '.most-next',
        prevEl: '.most-prev',
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
      },
});

const ProducSwiper = new Swiper('.product-swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
        nextEl: '.product-next',
        prevEl: '.product-prev',
    },
    autoplay: {
        delay: 3200,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
        1400 :{
          slidesPerView: 6,
        }
      },
});

const CustomerSwiper = new Swiper('.customer-swiper', {
  slidesPerView: 2,
  spaceBetween: 0,
  loop: true,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  breakpoints: {
      576:{
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1200:{
        slidesPerView: 5,
      },
      1400:{
        slidesPerView: 6,
      }
    },
});