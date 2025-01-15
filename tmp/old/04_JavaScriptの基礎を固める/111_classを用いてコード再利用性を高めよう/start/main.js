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


// 少し実践的にやってみる。
document.addEventListener('DOMContentLoaded', () => {
  // 定義したクラスに引数を渡してインスタンスを生成する。
  const target = new TextAnimation('.animate-title');
  const target2 = new TextAnimation('.animate-title-2');
  // クラス・メソッドを使って処理を実行する。
  setTimeout(() => {
    target.animate();
  }, 1000);
  target2.animate();
});

// クラス定義
class TextAnimation {
  // 初期値を定義
  constructor(elem) {
    // 渡ってきた要素に対してインスタンスを生成させて変数に収めていく。
    // ドキュメントの中から収集したい要素をこのインスタンスのelemで呼べる。
    // このインスタンスの前後の空白を排除してから配列としたものをインスタンスのcharで呼べる。
    // このインスタンにクラス・メソッドを当ててそれをinnerHTMLにして変数に収める。
    this.elem = document.querySelector(elem);
    this.chars = this.elem.innerHTML.trim().split(""); 
    this.elem.innerHTML = this._splitText();
  }
  // これは、クラスの中だけで使うと宣言しているメソッドになる。
  _splitText() {
    return this.chars.reduce((acc, cur) => {
      cur = cur.replace(/\s+/, '&nbsp;');
      return `${ acc }<span class="char">${ cur }</span>`;
    }, '');
  }
  // アニメーションのトリガーとなるメソッド定義。
  animate() {
    this.elem.classList.toggle('inview');
  }
}