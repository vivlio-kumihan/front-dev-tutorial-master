document.addEventListener('DOMContentLoaded', function() {
  // Hero Slider
  const hs = new HeroSlider('.swiper');
  // 最小秒数を1100にしないとバグる。
  // hs.autoStart({ delay: 1100 });
  hs.autoStart();
  // hs.autoStop();

  // Text Animation
  const targets = document.querySelectorAll('.animate-title');
  // CSSアニメーション版とGSAP版で切り替える。
  // CSSの切り替えも忘れずに。
  //    CSS版
  // const tas = [...targets].map(node => new TextAnimation(node));
  //    GSAP版
  const tas = [...targets].map(node => new GsapTextAnimation(node));
  const _textAnimeCB = function(el, isIntersecting) {
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
  const textAnimeSO = new ScrollObserver('.animate-title', _textAnimeCB, { once: false });
  // 機能を停止させるメソッド
  // textAnimeSO.destroy();

  // Slide in Images
  const _slideImageCB = function(el, isIntersecting) {
    if (isIntersecting) {
      el.classList.add('inview');
    } else {
      el.classList.remove('inview');
    }
  };
  const slideImageSO = new ScrollObserver('.cover-slide', _slideImageCB, { once: true });
  // slideImageSO.destroy();
});