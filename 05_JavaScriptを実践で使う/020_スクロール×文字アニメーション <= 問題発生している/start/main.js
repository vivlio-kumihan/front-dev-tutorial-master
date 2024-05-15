// 問題
// observer.unobserve(entry.target);をコメント・アウトして監視を続ける設定をするとバグになる。
// 対応する設定はしているはずなのに。。。
//   this.DOM.el = el instanceof HTMLElement 
//                   ? el 
//                   : document.querySelector(el) 


// CSSのアニメーション
document.addEventListener('DOMContentLoaded', function () {
  const targetEls = document.querySelectorAll('.animate-title');
  const cb = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 複数の要素に対してスクロールに応じたアニメーションをかける場合、
        // 要素名を引数として渡すと、複数の要素分を最初の要素へアニメーションをかけることになり、
        // バグの原因になるので、DOMを渡すことで回避する。
        const ta = new TextAnimation(entry.target);
        ta.animate();
        observer.unobserve(entry.target);
      } else {
      }
    });
  };
  
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0
  };
  
  const io = new IntersectionObserver(cb, options);
  targetEls.forEach(el => {
    io.observe(el);
  })
});


// // GSAPのアニメーション
// document.addEventListener('DOMContentLoaded', function () {
//   const cb = (entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         // 複数の要素に対してスクロールに応じたアニメーションをかける場合、
//         // 要素名を引数として渡すと、複数の要素分を最初の要素へアニメーションをかけることになり、
//         // バグの原因になるので、DOMを渡すことで回避する。
//         const ta = new GsapTextAnimation(entry.target);
//         ta.animate();
//         observer.unobserve(entry.target);
//       } else {
//       }
//     });
//   };
  
//   const options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0
//   };
  
//   const io = new IntersectionObserver(cb, options);
//   const targetEls = document.querySelectorAll('.gsap-animate-title');
//   targetEls.forEach(el => {
//     io.observe(el);
//   })
// });