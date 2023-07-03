import Swiper from "../vendor/swiper";
import vars from "../_vars";

const {heroSlider,cadrsSliders,productSlider,productSliderThumbs} = vars;

if(heroSlider) {
  const heroSliderNav = {
    prev: heroSlider.querySelector('.hero-slider__prev'),
    next: heroSlider.querySelector('.hero-slider__next'),
    pagination: document.querySelector('.hero-section__pagination')
  }

  new Swiper(heroSlider.querySelector('.swiper-container'), {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,
    observer: true,
    observeParents: true,
    speed: 1500,
    navigation: {
      nextEl: heroSliderNav.next,
      prevEl: heroSliderNav.prev,
    },

    pagination: {
      el: heroSliderNav.pagination,
      type: 'bullets',
    },

    autoplay: {
      delay: 5000,
    },

    breakpoints: {
      767:{
        spaceBetween: 0,
      }
    }
  });
}

cadrsSliders.forEach((productsSlider) => {
  const cadrsSlidersNav = {
    prev: productsSlider.querySelector('.cards-slider__prev'),
    next: productsSlider.querySelector('.cards-slider__next'),
    pagination: productsSlider.querySelector('.cards-slider__pagination')
  }


  new Swiper(productsSlider.querySelector('.products-slider'), {
    slidesPerView: 2,
    spaceBetween: 15,
    observer: true,
    observeParents: true,
    loop: true,
    speed: 1500,
    watchOverflow: true,

    navigation: {
      nextEl: cadrsSlidersNav.next,
      prevEl: cadrsSlidersNav.prev,
    },

    pagination: {
      el: cadrsSlidersNav.pagination,
      type: 'bullets',
    },

    autoplay: {
      delay: 5000,
    },

    breakpoints: {
      767:{
        spaceBetween: 10,
        slidesPerView: 3,
      }
    }
  });

  new Swiper(productsSlider.querySelector('.news-slider'), {
    slidesPerView: 'auto',
    spaceBetween: 15,
    observer: true,
    observeParents: true,
    loop: true,
    speed: 1500,
    watchOverflow: true,

    navigation: {
      nextEl: cadrsSlidersNav.next,
      prevEl: cadrsSlidersNav.prev,
    },

    pagination: {
      el: cadrsSlidersNav.pagination,
      type: 'bullets',
    },

    autoplay: {
      delay: 5000,
    },

    breakpoints: {
      576:{
        spaceBetween: 15,
        slidesPerView: 2,
      },
      1024:{
        spaceBetween: 10,
        slidesPerView: 3,
      }
    }
  });
})

if ( productSliderThumbs && productSlider) {
  const sliderThumb = new Swiper(productSliderThumbs.querySelector('.swiper-container'), {
    slidesPerView: 'auto',
    spaceBetween: 8,
    observer: true,
    observeParents: true,
    slideToClickedSlide: true,
    loop: true,
    loopedSlides: 4,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,

    navigation: {
      nextEl: productSliderThumbs.querySelector('.thumb-slider__next'),
      prevEl: productSliderThumbs.querySelector('.thumb-slider__prev'),
    },

    autoplay: {
      delay: 5000,
    },

    breakpoints: {
      320:{
        slidesPerView: 3,
        spaceBetween: 8,
        direction: 'horizontal',
      },
      576:{
        slidesPerView: 4,
        spaceBetween: 8,
        direction: 'horizontal',
      },
      767:{
        slidesPerView: 3,
        spaceBetween: 8,
        direction: 'horizontal',
      },
      1025:{
        slidesPerView: 'auto',
        spaceBetween: 8,
        direction: 'vertical',
      }
    }

  });
  const sliderProduct = new Swiper(productSlider.querySelector('.swiper-container'), {
    slidesPerView: 1,
    spaceBetween: 0,
    observer: true,
    observeParents: true,
    slideToClickedSlide: true,
    loop: true,
    loopedSlides: 4,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,

    autoplay: {
      delay: 5000,
    },
  });


  sliderProduct.controller.control = sliderThumb;
  sliderThumb.controller.control = sliderProduct;
}








