// スクロールによって要素を監視するクラスを作る。
// そのクラスに、監視対象の要素にアニメーションを仕込んだコールバック関数を引数に入れる。
// 汎用的な運用ができるクラスでサイトを管理する。

// そのクラスに必要なものは、
//     * 監視対象の要素。
//     * 監視対象の要素に仕込むコールバック関数。
//     * アニメーションがかかるタイミング（画面内の上下どの位置でアニメーションがかかるか）。

// document.addEventListener('DOMContentLoaded', function () {

//   const cb = function (el, isIntersecting) {
//     if(isIntersecting) {
//         const ta = new TextAnimation(el);
//         ta.animate();
//     }
//   }

//   const so = new ScrollObserver('.animate-title', cb, { rootMargin: "0px 0px" });
// });


document.addEventListener('DOMContentLoaded', function() {
  const cb = function(el, isIntersecting) {
    if (isIntersecting) {
      const ta = new TextAnimation(el);
      ta.animate();      
    }
  };
  const so = new ScrollObserver('.animate-title', cb, { rootMargin: '-300px 0px'});
});

class ScrollObserver {
  // 重要な考え方、
  // constructorで設定するものは『変数』にしておく、
  // 変数を導き出すための関数は切り分けておく。
  constructor(targetEls, cb, options) {
    this.targetEls = document.querySelectorAll(targetEls);
    this.cb = cb;
    const defaultOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
      // once: true
    };
    // ScrollObserverで設定するオプションと初期設定のオプションをマージする。
    this.options = Object.assign(defaultOptions, options);
    // わざわざ別の変数に格納するのか？？？
    // this.once = this.options.once;
    this._init();
  }
  _init() {
    const callBack = function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 明示的にコールバック関数内に真偽値を入れることでより良い運用ができるようになるらしい、
          // この後の講座でそこらが説明されるかを留意しておく。
          // ここがコールバック関数の発火ポイント。
          //    コールバックの定義を書きにいく。
          //    コールバックでやりたいことは文字アニメーションだよ。
          this.cb(entry.target, true);
          observer.unobserve(entry.target);
          // if (this.once) {
          //   observer.unobserve(entry.target);
          // }
        } else {
          this.cb(entry.target, false);
        }
      });
    };
    const io = new IntersectionObserver(callBack.bind(this), this.options);
    this.targetEls.forEach(el => {
      io.observe(el);
    });
  }
}