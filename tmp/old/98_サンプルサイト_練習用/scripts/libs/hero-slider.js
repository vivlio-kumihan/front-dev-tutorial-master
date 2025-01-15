class HeroSlider {
  constructor(el) {
    // elの位置を1行下にするだけでバグる。なぜだろう？
    this.el = el;
    this.swiper = this._initSwiper();
  }
  _initSwiper() {
    return new Swiper(this.el, {
      effect: 'coverflow',
      loop: true,
      // autoplay: {
      //   delay: 2000,
      // },
      speed: 1000,
      slidesPerView: 1,
      breakpoints: {
          1024: {
              slidesPerView: 2,
          }
      }, 
      centeredSlides: true,
    });
  }

  // 引数にオブジェクトを代入することで
  // パラメータの書き換えができるように改造
  autoStart(options = {}) {
    options = Object.assign({
      delay: 4000
    }, options);
    this.swiper.params.autoplay = options;
    // start()関数は組み込み。
    this.swiper.autoplay.start();
  }
  autoStop() {
    this.swiper.autoplay.stop();
  }
}
