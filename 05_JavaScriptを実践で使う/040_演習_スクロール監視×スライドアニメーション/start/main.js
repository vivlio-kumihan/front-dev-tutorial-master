document.addEventListener('DOMContentLoaded', function () {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0
  };

  // この2行がメインの命令。////////////////////////////////////////
  const io = new IntersectionObserver(cb, options);
  elms.forEach(elm => {
    io.observe(elm);
  });

  // スクロールを監視するクラスを新設
  class ScrollObserver {
    // 初期設定をトリガーとなる要素を収集とする。
    constructor(triggerElms) {
      this.triggerElms = document.querySelectorAll(triggerElms);
      this._init;
    }
    // コールバック関数をスクロールを監視するクラスへ移設
    // プライベートメソッドとして使う。
    // 初期化処理にメソッド定義を入れるのは避ける。
    _init() {
      const cb = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // テキストアニメーションのクラスの初期化と命令は
            // スクロールを監視するクラスとは関係ないので外す。
            // const ta = new TextAnimation(entry.target);
            // ta.animate(); 
            observer.unobserve(entry.target);
          }
        });
      };
    }
  }
});