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

//////////////////////////////////////////////////////////////////////
// CSSアニメーションを元にしたクラスと継承したクラスはGSAPを使うという大技。

// クラスの継承
document.addEventListener('DOMContentLoaded', function () {
  // オリジナルのクラスからインスタンスを生成する。
  const ta = new TextAnimation('.animate-title');
  // 継承のクラスからインスタンスを生成する。
  const tta = new GsapTextAnimation('.gsap-animate-title');
  // クラス・メソッドを充ててアニメーションを実行。
  ta.animate();
  tta.animate();
});

class TextAnimation {
  constructor(el) {
    // 一つの方法
    // 変数の中身が『DOM』か『それ以外』かを視覚化させる。
    this.DOM = {};
    this.DOM.el = document.querySelector(el);
    this.chars = this.DOM.el.innerHTML.trim().split("");
    console.log(this.chars);
    this.DOM.el.innerHTML = this._splitText();
  }
  _splitText() {
    return this.chars.reduce((acc, curr) => {
      // 配列の要素にスペースがある場合は特殊文字と入れ替える。
      curr = curr.replace(/\s+/, '&nbsp;');
      return `${acc}<span class="char">${curr}</span>`;
    }, "");
  }
  animate() {
    this.DOM.el.classList.toggle('inview');
  }
}

// クラスの継承
// class NewClassName extends OriginClassName {}
class GsapTextAnimation extends TextAnimation {
  // 初期値も引き継ぐ
  // 元のconstructor()関数がとっている引数と同じものを投げる。
  // super()関数で受ける。これで引き継ぎ完了。
  constructor(el) {
    super(el);
    this.DOM.chars = this.DOM.el.querySelectorAll('.char');
  }
  animate() {
    this.DOM.el.classList.add('inview');
    this.DOM.chars.forEach((c, idx) => {
      gsap.to(c, .6, {
        ease: Back.easeOut,
        delay: idx * .05,
        startAt: { y: '-50%', opacity: 0},
        y: '0%',
        opacity: 1,
      });
    });
  }
}