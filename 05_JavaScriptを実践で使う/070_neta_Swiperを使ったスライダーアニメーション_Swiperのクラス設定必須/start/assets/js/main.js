const swiper = new Swiper('.swiper', {
  effect: 'coverflow',
  loop: true,
  loopAdditionalSlides: 1, 
  speed: 1000, //=> 1秒のアニメーション
  autoplay: {
    delay: 2000, //=> 2秒間静止
  },
});

// swiper.on('reachEnd', function () {
//   swiper.slides.eq(0).clone().appendTo('.swiper-wrapper');
//   swiper.update();
// });

// swiper.on('reachEnd', function () {
//   const originalSlides = swiper.slides;
//   const clonedSlide = originalSlides.eq(0).clone();
//   swiper.appendSlide(clonedSlide);
//   swiper.removeSlide(0);
// });



// document.addEventListener('DOMContentLoaded', function() {
//   const hs = new HeroSlider('.swiper');
// });

// class HeroSlider {
//   constructor(elm) {
//     this.elm = elm;
//     this.swiper = new Swiper('.swiper', {
//       // effect: 'fade',
//       effect: 'coverflow',
//       loop: true,
//       speed: 1000, // ループの時間
//       loopedSlides: 3,
//       autoplay: {
//         delay: 5000, // 途切れなくループ
//       },
//       // centeredSlides: true,
//       // slidePerView: 1,
//       // breakposts: {
//       //   1024: {
//       //     slidePerView: 2
//       //   }
//       // }
//     });
//   }
// };


// // direction: 'vertical',
// // loop: true, // ループ有効
// // slidesPerView: 3, // 一度に表示する枚数
// // allowTouchMove: false, // スワイプ無効