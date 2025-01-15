// ファイルを分ける。
// クラス定義は枠の外でいいわけだね。
class ScrollObserver {
  constructor(elms, cb, options) {
    // 引数elmsの初期化
    this.elms = document.querySelectorAll(elms);
    const defaultOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
      // 引数のデフォルトがfalseなので、こちらではtrueに設定
      once: true
    };
    // 引数cbの初期化
    this.cb = cb;
    // 引数optionsの初期化
    this.options = Object.assign(defaultOptions, options);
    // onceオプションを有効にするそのままかをここで設定する。
    // 上でマージしているのに？　ここで改めて？
    // this.once = this.options.once;
    this._init();
  }
  _init() {
    const callBack = function (entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.cb(entry.target, true);
          if (this.once) {
            observer.unobserve(entry.target);
          }
        } else {
          this.cb(entry.target, false);
        }
      });
    };
    
    // クラスの中でクラスのインスタンスを生成しているってところに留意。
    this.io = new IntersectionObserver(callBack.bind(this), this.options);

    // IntersectionObserverクラスは新しいので対応していないブラウザがある。
    // 回避策としてscroll-polyfill.jsを使う。
    // 100mm/secでスクリーンを監視するという命令。
    this.io.POLL_INTERVAL = 100;

    this.elms.forEach(elm => this.io.observe(elm));
  }

  // この一連のアニメーションが不要の場合の削除スイッチ。
  destory() {
    this.io.disconnect();
  }
}