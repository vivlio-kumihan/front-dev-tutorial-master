document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu
  new MobileMenu();
  
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
  const textAnimeSO = new ScrollObserver('.animate-title', _textAnimeCB, { once: true });
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

  // Travel Texts
  const _travelTextsCB = function(el, isIntersecting) {
    if (isIntersecting) {
      el.classList.add('inview');
    } else {
      el.classList.remove('inview');
    }
  };
  const travelTextsSO = new ScrollObserver('.travel__texts', _travelTextsCB, { once: true });
  // slideImageSO.destroy();

  // Header apear bg white, box-shadow
  // 思い込みが過ぎる。
  // 無名関数でelに入ったものをオブジェクト内で必ず展開せなあかんなんて誰も言ってない。
  // トリガーの要素とは違う要素へアニメーションをかけたいのだから。
  const header = document.querySelector(".header");
  const _headerBgWhiteCB = function(el, isIntersecting) {
    if (isIntersecting) {
      header.classList.remove('triggered');
    } else {
      header.classList.add('triggered');
    }
  };
  // onceをfalseにしないといけない。
  // つまり、トリガーが画面から出たり入ったりを常に監視し続けるオプションをつけないといけない。
  const headerBgWhiteSO = new ScrollObserver('.nav-trigger', _headerBgWhiteCB, { once: false });
});