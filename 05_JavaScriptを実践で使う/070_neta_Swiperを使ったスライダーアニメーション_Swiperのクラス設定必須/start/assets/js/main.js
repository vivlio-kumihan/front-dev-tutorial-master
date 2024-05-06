document.addEventListener('DOMContentLoaded', function() {
  const hs = new HeroSlider('.swiper');
});

class HeroSlider {
  constructor(elm) {
    this.elm = elm;
    this.swiper = new Swiper('.swiper', {
      // effect: 'fade',
      effect: 'coverflow',
      loop: true,
      speed: 1000, // ループの時間
      autoplay: {
        delay: 5000, // 途切れなくループ
      },
      centeredSlides: true,
      slidePerView: 2,
      breakposts: {
        1024: {
          slidePerView: 2
        }
      }
    });
  }
};


// direction: 'vertical',
// loop: true, // ループ有効
// slidesPerView: 3, // 一度に表示する枚数
// allowTouchMove: false, // スワイプ無効