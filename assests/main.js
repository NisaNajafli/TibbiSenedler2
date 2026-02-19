document.getElementById("year").textContent = new Date().getFullYear();
const blogSwiper = new Swiper('.blog-slider', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,

  navigation: {
    nextEl: '.blog-next',
    prevEl: '.blog-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1200: {
      slidesPerView: 3
    }
  }
});

 const reviewSwiper = new Swiper(".review-slider", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".review-next",
    prevEl: ".review-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    }
  }
});