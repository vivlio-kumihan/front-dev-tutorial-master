const swiper = new Swiper('.swiper', {
  // effect: 'fade',
  effect: 'coverflow',
  loop: true,
  speed: 3000, // ループの時間
  autoplay: {
    delay: 6000, // 途切れなくループ
  },  
});

// direction: 'vertical',
// loop: true, // ループ有効
// slidesPerView: 3, // 一度に表示する枚数
// allowTouchMove: false, // スワイプ無効