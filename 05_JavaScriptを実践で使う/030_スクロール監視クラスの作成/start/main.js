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
  const so = new ScrollObserver('.animate-title', cb, { once: false});
  // 機能を停止させるメソッド
  // so.destroy();
});