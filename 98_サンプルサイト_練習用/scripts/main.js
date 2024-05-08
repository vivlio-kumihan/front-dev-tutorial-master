document.addEventListener('DOMContentLoaded', function() {
  // Hero Slider
  const hs = new HeroSlider('.swiper');
  // 最小秒数を1100にしないとバグる。
  // hs.autoStart({ delay: 1100 });
  hs.autoStart();
  // hs.autoStop();

  // Text Animation
  const targets = document.querySelectorAll('.animate-title');
  const tas = [...targets].map(node => new TextAnimation(node));
  const cb = function(el, isIntersecting) {
    if (isIntersecting) {
      tas.forEach(ta => {
        if (ta.DOM.el === el) {
          ta.animate();
        }
      })     
    } else {
      el.classList.remove('inview');
    }
  };
  const so = new ScrollObserver('.animate-title', cb, { once: true });
  // 機能を停止させるメソッド
  // so.destroy();

  // Slide in Images
  const slide_images_cb = function(el, isIntersecting) {
    if (isIntersecting) {
      el.classList.add('inview');
    } else {
      el.classList.remove('inview');
    }
  };
  const slide_images_so = new ScrollObserver('.cover-slide', slide_images_cb, { once: true });
  // so.destroy();
});


