// IntersectionObserverクラスでスクロールの挙動に合わせたイベントを作る。

// // その1
// // 監視対象となる要素を収集。
// const child = document.querySelector('.child');
// // このコールバック関数には、対象が監視区域への出入りで起こすイベントを登録しておく。
// // 今は、監視区域の出入りに反応してアラートを出す関数にしている。
// const cb = () => {
  //   alert("intersection!");
  // };
  // // 交差点を監視するクラスからインスタンスを生成する。
  // // 引数にはコールバック関数を入れる。
  // const io = new IntersectionObserver(cb);
  // // io.observe()関数に要素を引数として監視を開始する。
  // io.observe(child);
  
// // その2
// // コールバック関数にconsole.log()を仕込んで動かしてみる。
// const children = document.querySelectorAll('.child');
// // コールバック関数には2つの引数を取る。
// // 登録するもの（複数）と監視者
// const cb = (entries, observer) => {
//   entries.forEach(elem => {
//     if (elem.isIntersecting) {
//       console.log('inview');
//     } else {
//       console.log('out view');
//     }
//   });
// };
// // インスタンスを生成して。。。
// const io = new IntersectionObserver(cb);
// // 監視開始。
// children.forEach(child => {
//   io.observe(child);
// })

// // その3
// // 対象が一度監視区域に入ったら以降は監視を解除する。
// // 予め予定されている引数のobserverに監視をやめるようメソッドを送る。
// // これは押さえておかないといけない動き。
// const children = document.querySelectorAll('.child');
// const cb = (entries, observer) => {
//   entries.forEach(elem => {
//     if (elem.isIntersecting) {
//       console.log('inview');
//       observer.unobserve(elem.target);
//     } else {
//       console.log('out view');
//     }
//   });
// };

// const io = new IntersectionObserver(cb);
// children.forEach(child => {
//   io.observe(child);
// })

// その3
// 監視区域に入ったら現れ、出る時に消える
// 実際的なアニメーションを作る。
// IntersectionObserverクラスに渡す領域を調整するオプションの話。
const children = document.querySelectorAll('.child');
const cb = (entries, observer) => {
  entries.forEach(elem => {
    if (elem.isIntersecting) {
      console.log('inview');
      elem.target.classList.add('appear');
    } else {
      console.log('out view');
      elem.target.classList.remove('appear');
    }
  });
};

const options = {
  // デフォルトではwindowで、それを変更する。
  // ほぼほぼ使わない。
  root: null,
  // マストで使う。
  rootMargin: '-200px 0px',
  // 対象物の監視ラインを外側にするか内側にするか。
  // 内側が0で、外側が1。
  // 0はデフォルトなんで意味なしだよ。
  threshold: 0
};
const io = new IntersectionObserver(cb, options);
children.forEach(child => {
  io.observe(child);
})
