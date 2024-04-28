// 字数を限定したアニメーション
class TextAnimation {
  constructor(el) {
    // elの初期化
    // => main.jsからの続き
    // このアプリでは3回クラスが呼ばれる。
    // その際に要素で受けたらバグの原因になる。
    // DOMで受けないといけない。
    // で、一応DOMか文字列かの判定をして、
    // DOMのelプロパティとして初期化をするという流れ。
    this.DOM = {};
    this.DOM.el = el instanceof HTMLElement
                    ? el : document.querySelector(el);
    this.chars = this.DOM.el.innerHTML.trim().split("");
    this.DOM.el.innerHTML = this._splitText();
  }
  _splitText() {
    return this.chars.reduce((acc, curr) => {
        curr = curr.replace(/\s+/, '&nbsp;');
        return `${acc}<span class="char">${curr}</span>`;
    }, "");
  }
  animate() {
    this.DOM.el.classList.toggle('inview');
  }
}

// 字数をJSで処理する文字アニメーション
class GsapTextAnimation extends TextAnimation {
  constructor(el) {
    super(el);
    this.DOM.chars = this.DOM.el.querySelectorAll('.char');
  }
  
  animate() {
    this.DOM.el.classList.add('inview');
    this.DOM.chars.forEach((c, i) => {
      gsap.to(c, .6, {
          ease: Back.easeOut,
          delay: i * .05,
          startAt: { y: '-50%', opacity: 0},
          y: '0%',
          opacity: 1
      });
    });
  }
}