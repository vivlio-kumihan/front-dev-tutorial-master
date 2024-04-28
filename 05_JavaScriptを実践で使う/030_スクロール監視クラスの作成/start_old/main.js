// // リファクタリングの目的
// // IntersectionObserverクラスで行われる監視する機能を分ける。
// // コールバック関数を渡すだけで実行できるものを目指す。


// // 最初のリファクタリング //////////////////////////////////////////////////////////////////
// document.addEventListener('DOMContentLoaded', function () {

//   const cb = function (el, isIntersecting) {
//     if (isIntersecting) {
//       const ta = new TextAnimation(el);
//       ta.animate();
//     }
//   };
  
//   // 一番重要な命令。アニメーションを発火させる。
//   // 引数は、elms, cb, options。
//   const so = new ScrollObserver('.animate-title', cb)


//   // 収集すべき要素を集める機能をScrollObserverクラスへ移行する。
//   // const elms = document.querySelectorAll('.animate-title');

//   // // ScrollObserverクラスのコールバック関数として移動。
//   // // 不要部分を除いて移動する。
//   // const cb = (entries, observer) => {
//   //   entries.forEach(entry => {
//   //     if (entry.isIntersecting) {
//   //       // これはTextAnimationのクラスだから不要。
//   //       // const ta = new TextAnimation(entry.target);
//   //       // ta.animate(); 
//   //       observer.unobserve(entry.target);
//   //     }
//   //   });
//   // };

//   // オプションもScrollObserverクラスに必要なものなので移動。
//   // const options = {
//   //   root: null,
//   //   rootMargin: '0px',
//   //   threshold: 0
//   // };

//   // // 肝心のクラス生成をScrollObserverクラスへ移動
//   // const io = new IntersectionObserver(cb, options);
//   // elms.forEach(elm => io.observe(elm));
// });

// class ScrollObserver {
//   // ScrollObserverクラスを生成する際の引数の初期化
//   // constructorにはthisに設定する値だけをおくようにする。
//   // 関連した関数の内容はプライベート関数にして別にしておく。
//   constructor(elms, cb, options) {
//     // 引数elmsの初期化
//     this.elms = document.querySelectorAll(elms);
//     // クラスの生成時につけるオプションでデフォルトのオプションをマージする。
//     // そのためdefaultOptionsとリネームする。
//     const defaultOptions = {
//       root: null,
//       rootMargin: '0px',
//       threshold: 0
//     };
//     // 引数cbの初期化
//     this.cb = cb;
//     // 引数optionsの初期化
//     // 上のデフォルトのオプションとマージする。
//     this.options = Object.assign(defaultOptions, options) ;
//     // 引数cbの初期化をするためのプライベート関数。
//     this._init();
//   }
//   _init() {
//     // ここのcbは、IntersectionObserverクラスを生成する時に必要なコールバック名
//     // ScrollObserverクラスのcbと区別するためにcallBackとリネームする。
//     const callBack = function (entries, observer) {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           // cbの初期化
//           // cbにDOMと画面に入ったか否かの真偽値を渡す。
//           this.cb(entry.target, true);
//           // これはTextAnimationのクラスだから不要。
//           // const ta = new TextAnimation(entry.target);
//           // ta.animate();
//           observer.unobserve(entry.target);
//         } else {
//           this.cb(entry.target, false);
//         }
//       });
//     };    
//     // 肝心のクラス生成をScrollObserverクラスへ移動
//     // 引数はScrollObserveクラスのものを使うので、this.options。
//     // こちらもcbもcallBackとリネームする。
//     // IntersectionObserverはデフォルトでWindowを指す。
//     // だから、callBackはthisで束縛しないといけない。
//     // ここら辺がまだまだわからん。
//     const io = new IntersectionObserver(callBack.bind(this), this.options);
//     // elmsにthisを充てさせる。
//     this.elms.forEach(elm => io.observe(elm));
//   }
// }



// オプションをつける //////////////////////////////////////////////////////////////////
// 一回アニメーションするとobserver.unobserve(entry.target);で監視を止める設定。
// これをオプションをつけることで可変にする。

document.addEventListener('DOMContentLoaded', function () {
  const cb = function (el, isIntersecting) {
    if (isIntersecting) {
      const ta = new TextAnimation(el);
      ta.animate();
    }
  };
  
  // アニメーションを発火させる。
  // onceプロパティが来たらfalseを返す。
  const so = new ScrollObserver('.animate-title', cb, { rootMargin: "600px 0px"});
  // アニメーションを止める。
  // so.destory();
});

// // ファイルを分ける。
// // クラス定義は枠の外でいいわけだね。
// class ScrollObserver {
//   constructor(elms, cb, options) {
//     // 引数elmsの初期化
//     this.elms = document.querySelectorAll(elms);
//     const defaultOptions = {
//       root: null,
//       rootMargin: '0px',
//       threshold: 0,
//       // 引数のデフォルトがfalseなので、こちらではtrueに設定
//       once: true
//     };
//     // 引数cbの初期化
//     this.cb = cb;
//     // 引数optionsの初期化
//     this.options = Object.assign(defaultOptions, options);
//     // onceオプションを有効にするそのままかをここで設定する。
//     // 納得いかない。上でマージしてんのとちゃうのか？
//     this.once = this.options.once;
//     this._init();
//   }
//   _init() {
//     const callBack = function (entries, observer) {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           this.cb(entry.target, true);
//           if (this.once) {
//             observer.unobserve(entry.target);
//           }
//         } else {
//           this.cb(entry.target, false);
//         }
//       });
//     };    
//     const io = new IntersectionObserver(callBack.bind(this), this.options);

//     // IntersectionObserverクラスは新しいので対応していないブラウザがある。
//     // 回避策としてscroll-polyfill.jsを使う。
//     // 100mm/secでスクリーンを監視するという命令らしい。
//     // this.io.POLL_INTERVAL = 100;

//     this.elms.forEach(elm => io.observe(elm));
//   }

//   // この一連のアニメーションが不要の場合のスイッチぽん。
//   destory() {
//     this.io.disconnect();
//   }
// }