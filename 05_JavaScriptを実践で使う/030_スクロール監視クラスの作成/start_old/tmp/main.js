// document.addEventListener('DOMContentLoaded', function () {
//     const el = document.querySelector('.animate-title');
    
//     // // 配列ではないが、『文字』は『for』で扱える。
//     // const str = el.innerHTML.trim();
//     // let concatStr = '';
    
//     // for(let c of str) {
//       //     c = c.replace(/\s+/, '&nbsp;');
//       //     concatStr += `<span class="char">${c}</span>`;
//       // }
      
//     const str = el.innerHTML.trim().split("");
//     // reduceで使う場合は配列にする。
//     // 引数は、accumulation(集積)、current(現在)
//     // 第二引数をから文字にすることで、 currにのみループの対象要素が回ってくるようにする
//     el.innerHTML = str.reduce((acc, curr) => {
//       curr = curr.replace(/\s+/, '&nbsp;');
//       return `${acc}<span class="char">${curr}</span>`;
//     }, "");
    
//     // 『第二引数』に初期値を据えることで正しく計算が行える。
//     nums = [1,2,3,4,5];
//     const result = nums.reduce((acc, cur) => {
//       return acc + cur * 2;
//     }, 0);
//     console.log(result);

//     const string = "hello";
//     const strArr = string.split("");
//     const result2 = strArr.reduce((acc, cur) => {
//       return acc + `<span>${cur}</span>`;
//     }, "")
//     console.log(result2)
// });

// // class
// // 初歩的な定義で理解する。
// class TextAnimation {
//   // 初期設定の関数　あれです。
//   // 変数を定義する。
//   constructor(elem) {
//     this.elem = elem;
//   }
//   // メソッドを定義する。
//   log() {
//     alert(this.elem);
//   }
// }

// const target = new TextAnimation("hello");
// // 変数定義を呼び出す。
// // alert(target.elem);
// // メソッド定義の呼び出し。
// target.log();


// // 少し実践的にやってみる。
// document.addEventListener('DOMContentLoaded', () => {
//   // 定義したクラスに引数を渡してインスタンスを生成する。
//   const target = new TextAnimation('.animate-title');
//   const target2 = new TextAnimation('.animate-title-2');
//   // クラス・メソッドを使って処理を実行する。
//   setTimeout(() => {
//     target.animate();
//   }, 1000);
//   target2.animate();
// });

// // クラス定義
// class TextAnimation {
//   // 初期値を定義
//   constructor(elem) {
//     // 渡ってきた要素に対してインスタンスを生成させて変数に収めていく。
//     // ドキュメントの中から収集したい要素をこのインスタンスのelemで呼べる。
//     // このインスタンスの前後の空白を排除してから配列としたものをインスタンスのcharで呼べる。
//     // このインスタンにクラス・メソッドを当ててそれをinnerHTMLにして変数に収める。
//     this.elem = document.querySelector(elem);
//     this.chars = this.elem.innerHTML.trim().split(""); 
//     this.elem.innerHTML = this._splitText();
//   }
//   // これは、クラスの中だけで使うと宣言しているメソッドになる。
//   _splitText() {
//     return this.chars.reduce((acc, cur) => {
//       cur = cur.replace(/\s+/, '&nbsp;');
//       return `${ acc }<span class="char">${ cur }</span>`;
//     }, '');
//   }
//   // アニメーションのトリガーとなるメソッド定義。
//   animate() {
//     this.elem.classList.toggle('inview');
//   }
// }

// // bind()関数について
// document.addEventListener('DOMContentLoaded', function () {
//   const ta = new TextAnimation('.animate-title');
//   const ta2 = new TextAnimation('.animate-title-2');
//   ta.animate();
//   ta2.animate();
//   const btn = document.querySelector('#btn');
//   console.log(btn);
//   // イベント・リスナーを使った場合、
//   // thisで渡ってくるのはイベントを起こした要素のものが返ってくる。
//   // この場合だとbutton
//   btn.addEventListener('click', ta.animate.bind(ta));
//   // // bind()関数を使いたくない場合はこちらで対応。
//   // btn.addEventListener('click', function() {
//   //   ta.animate();
//   // });
// });

// class TextAnimation {
//   constructor(el) {
//     this.el = document.querySelector(el);
//     this.chars = this.el.innerHTML.trim().split("");
//     this.el.innerHTML = this._splitText();
//   }
//   _splitText() {
//     return this.chars.reduce((acc, curr) => {
//         curr = curr.replace(/\s+/, '&nbsp;');
//         return `${acc}<span class="char">${curr}</span>`;
//     }, "");
//   }
//   animate() {
//     console.log(this);
//     this.el.classList.toggle('inview');
//   }  
//   // bindについて
//   // // その1
//   // animate() {
//   //   // TextAnimationのなかでのthisはtaなのだが、
//   //   // setTimeout()関数が参照するのはwindowとなり、
//   //   // 以降、setTimeout()関数の中ではthisはwindowとなる。
//   //   window.setTimeout(function() {
//   //     console.log(this);
//   //   })
//   //   // そこから外れたら意図したthisになる。
//   //   console.log(this);
//   //   this.el.classList.toggle('inview');
//   // }
//   // // その2
//   // // 治外法権になったthisの主権を取り戻すには、
//   // // windowにbind()関数を送って、
//   // // 本来結びついているthis（class TextAnimation）に修正させる。
//   // animate() {
//   //   window.setTimeout(function() {
//   //     console.log(this);
//   //     this.el.classList.toggle('inview');
//   //   }.bind(this), 1000);
//   // }
// }

// // bindの復習
// const obj = {
//   first_name: 'Mafia',
//   last_name: 'Code',
//   printFullName: function() {
//     // 今更やけど知らなかった!
//     // オブジェクトに関数を定義して
//     // その中で自身のインスタンスを呼び出すときはthisなんや!!
//     console.log(this);
//     console.log(this.first_name);
//     window.setTimeout(function() {
//       console.log(this);
//     })
//     // 本来のthisにしたい場合。
//     // }.bind(this))
//   }
// }
// obj.printFullName();

// // 復習になる。
// // thisが指しているものは、newによって生成したインスタンスだよ。
// class MyObj {
//   constructor() {
//     this.first_name = 'Mafia';
//     this.last_name = 'Code';
//   }
//   printFullName() {
//     console.log(this.first_name);
//     // window.setTimeout(function() {
//     //   console.log(this);
//     // })
//   }
// }

// const obj2 = new MyObj();
// obj2.printFullName();

// //////////////////////////////////////////////////////////////////////
// // CSSアニメーションを元にしたクラスと継承したクラスはGSAPを使うという大技。

// // クラスの継承
// document.addEventListener('DOMContentLoaded', function () {
//   // オリジナルのクラスからインスタンスを生成する。
//   const ta = new TextAnimation('.animate-title');
//   // 継承のクラスからインスタンスを生成する。
//   const tta = new TweenTextAnimation('.tween-animate-title');
//   // クラス・メソッドを充ててアニメーションを実行。
//   ta.animate();
//   tta.animate();
// });

// class TextAnimation {
//   constructor(el) {
//     // 一つの方法
//     // 変数の中身が『DOM』か『それ以外』かを視覚化させる。
//     this.DOM = {};
//     this.DOM.el = document.querySelector(el);
//     this.chars = this.DOM.el.innerHTML.trim().split("");
//     this.DOM.el.innerHTML = this._splitText();
//   }
//   _splitText() {
//     return this.chars.reduce((acc, curr) => {
//       curr = curr.replace(/\s+/, '&nbsp;');
//       return `${acc}<span class="char">${curr}</span>`;
//     }, "");
//   }
//   animate() {
//     this.DOM.el.classList.toggle('inview');
//   }
// }

// // クラスの継承
// // class NewClassName extends OriginClassName {}
// class TweenTextAnimation extends TextAnimation {
//   // 初期値も引き継ぐ
//   // 元のconstructor()関数がとっている引数と同じものを投げる。
//   // super()関数で受ける。これで引き継ぎ完了。
//   constructor(el) {
//     super(el);
//     this.DOM.chars = this.DOM.el.querySelectorAll('.char');
//   }
//   animate() {
//     this.DOM.el.classList.add('inview');
//     this.DOM.chars.forEach((c, idx) => {
//       gsap.to(c, .6, {
//         ease: Back.easeOut,
//         delay: idx * .05,
//         startAt: { y: '-50%', opacity: 0},
//         y: '0%',
//         opacity: 1,
//       });
//     });
//   }
// }

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

// // その3
// // 監視区域に入ったら現れ、出る時に消える
// // 実際的なアニメーションを作る。
// // IntersectionObserverクラスに渡す領域を調整するオプションの話。
// const children = document.querySelectorAll('.child');
// const cb = (entries, observer) => {
//   entries.forEach(elem => {
//     if (elem.isIntersecting) {
//       console.log('inview');
//       elem.target.classList.add('appear');
//     } else {
//       console.log('out view');
//       elem.target.classList.remove('appear');
//     }
//   });
// };

// const options = {
//   // デフォルトではwindowで、それを変更する。
//   // ほぼほぼ使わない。
//   root: null,
//   // マストで使う。
//   rootMargin: '-200px 0px',
//   // 対象物の監視ラインを外側にするか内側にするか。
//   // 内側が0で、外側が1。
//   // 0はデフォルトなんで意味なしだよ。
//   threshold: 0
// };
// const io = new IntersectionObserver(cb, options);
// children.forEach(child => {
//   io.observe(child);
// })


// //////////////////// わかりかけてる //////////////////////////////////////////////////////////////////////
// document.addEventListener('DOMContentLoaded', function () {
//   const elms = document.querySelectorAll('.animate-title');

//   // 要素を回しているから一つ一つのような勘違いをしてしまったが、
//   // この前で、インスタンスがスプールされているイメージが良い。
//   const cb = (entries, observer) => {
//     console.log(entries);
//     entries.forEach(entry => {
//       // ここのifで画面に入ったかどうかを判断している。
//       // インスタンスに対してisIntersectingメソッドを送ると
//       // 要素が画面に入ったらtrue、出たらfalseを返す。
//       if (entry.isIntersecting) {
//         // sectionなど連続した要素があり、その中の例えば見出しなど
//         // 画面に入ったタイミングで表示させるなどのアニメーションを
//         // 作る際の注意点。
//         // アニメーションのクラスに対してタグ（文字列）で送っちゃダメ！
//         // const ta = new TextAnimation('.animate-title');
//         // 必ずDOM（オブジェクト）で送らないとバグを生む原因になる。
//         // => text-animation.jsへ続く
//         const ta = new TextAnimation(entry.target);
//         ta.animate(); 
//         // 初回に発動したらもう監視対象から外すよという命令
//         observer.unobserve(entry.target);
//       }
//     });
//   };
//   const options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0
//   };

//   // この2行がメインの命令。////////////////////////////////////////
//   // スクロールの監視をするクラスを定義しておいて。。。
//   const io = new IntersectionObserver(cb, options);
//   // 取り込んだ要素を回してインスタンスを発生させる。。。
//   elms.forEach(elm => {
//     // そして、それぞれの対象要素にスクロールの監視を起動。
//     // 画面に対象要素の出入りのタイミングでコールバック関数が呼ばれて処理が発動する。。。
//     io.observe(elm);
//   });
  
//   // elms.forEach(elm => {
//   //   if (elm instanceof HTMLElement) {
//   //     // elm は DOM 要素です
//   //     console.log('This is a DOM element');
//   //   } else {
//   //     // elm は DOM 要素ではありません
//   //     console.log('This is not a DOM element');
//   //   }
//   // });
// });

// // if, switch, while, for, doは文ではないからセミコロンは必要ない。




//////////////////// わかりかけてる その2 //////////////////////////////////////////////////////////////////////

// addEventListenerを整理する。
// スクロールを監視するクラスを新設してコードを整理する。

document.addEventListener('DOMContentLoaded', function () {
  const cb = function(el, isIntersecting) {
    if (isIntersecting) {
      const ta = new TextAnimation(entry.target);
      ta.animate(); 
    }
  }

  const so = new ScrollObserver('.animate-title', cb);

  // const elms = document.querySelectorAll('.animate-title');
  // const cb = (entries, observer) => {
  //   console.log(entries);
  //   entries.forEach(entry => {
  //     if (entry.isIntersecting) {
  //       const ta = new TextAnimation(entry.target);
  //       ta.animate(); 
  //       observer.unobserve(entry.target);
  //     }
  //   });
  // };
  // const options = {
  //   root: null,
  //   rootMargin: '0px',
  //   threshold: 0
  // };

  // // この2行がメインの命令。////////////////////////////////////////
  // // この命令を_init()関数へ移動。
  // const io = new IntersectionObserver(cb, options);
  // elms.forEach(elm => {
  //   io.observe(elm);
  // });

  // スクロールを監視するクラスを新設
  class ScrollObserver {
    // 初期設定をトリガーとなる要素を収集とする。
    constructor(triggerElms, cb, options) {
      // 引数triggerElmsの初期化
      this.triggerElms = document.querySelectorAll(triggerElms);
      // デフォルトのoptionsとScrollObserverクラスの引数になるoptionsが衝突しないようにリネームする。
      // デフォルトのオプションと引数のオプションはマージするような仕組みが必要。
      const defaultOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0
      };

      // 引数cbの初期化
      this.cb = cb;

      // 引数optionsの初期化
      // オプションをマージする仕組み。
      // defaultOptionsを変更があった場合のoptionsでマージしている。
      this.options = Object.assign(defaultOptions, options);
      this._init();
    }

    // コールバック関数をスクロールを監視するクラスへ移設
    // プライベートメソッドとして使う。
    // 初期化処理にメソッド定義を入れるのは避ける。
    _init() {
      // ScrollObserverクラスのcbと名前ば衝突するのでリネームする。
      const callBack = function (entries, observer) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // テキストアニメーションのクラスの初期化と命令は
            // スクロールを監視するクラスとは関係ないので外す。
            // const ta = new TextAnimation(entry.target);
            // ta.animate(); 

            // 第一引数には、監視しているDOM。
            // 第二引数には真偽値（entry.isIntersectingから得られる値）を設定する。
            // と言っているが意味がわからん。
            this.cb(entry.target, true);
            observer.unobserve(entry.target);
          } else {
            this.cb(entry.target, false);
          }
        });
      };
      // こちらのcbもリネームする。受け取るのは_init()関数で定義したものだから。
      // IntersectionObserverのthisは『window』だからthisを束縛しないといけない。
      // .bind(this)としてScrollObserverのthisを参照するように仕向ける。
      const io = new IntersectionObserver(callBack.bind(this), this.options);
      this.triggerElms.forEach(elm => {
        io.observe(elm);
      });      
    }
  }
});