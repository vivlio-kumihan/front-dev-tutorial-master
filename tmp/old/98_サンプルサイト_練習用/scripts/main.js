// 現在では、『defer』をつける。
// document.addEventListener('DOMContentLoaded', function() {
//   new Main;
//   // // 確かに使うことはないわ。
//   // const main = new Main;
//   // main.destroy();
// });

// まずは、mainクラスを生成させる。
class Main {
  constructor() {
    // トリガーを初期化する。
    // ここで定義するということは、bindの対象だということ。

    
    this.header = document.querySelector(".header");
    
    // テキスト・アニメーション用の小見出しを収集してアニメーション用にインスタンス化する。
    const targets = document.querySelectorAll('.animate-title');
    this.tas = [...targets].map(node => new GsapTextAnimation(node));
    
    // メモリー管理の観点から画面から隠れたスライダーは動作を停止させる。
    this.heroSlider = new HeroSlider('.swiper');    
    
    // 監視するスクロール・オブザーバーのインスタンスを収取するための配列を初期化する。
    this._observers = [];

    this.asides = document.querySelectorAll('.side');

    // "new MobileMenu();"と"this._scrollInit();"を呼ぶ。
    // 『this._observers = [];』より下に書かないとエラーになる。
    // 習慣として、このプライベート関数は最下位に書くことにする。
    this._init();
  }

  _init() {
    // クライアントの回線の状態によっては、ローディングに時間がかかる。
    // その際に仕掛けたアニメーションが終了することが起こり得る。
    // これを回避させる策として、しようしているPace.jsに仕掛けを作る。
    // ローディング（ページの読み込み）が終わるまでアニメーションを発火させないようにする。
    // Pace.jsにある、ローディングが終了したことを知らせる機能を利用する。
    // onメソッドに、終了を知らせる『done』が入るとコールバック関数を呼びなさいという命令。
    // 呼び出すのは全てのアニメーションのインスタンスが詰まっているプライベート関数
    // _scrollInitを読んでやる。
    Pace.on('done', this._scrollInit.bind(this));
    
    // 'DOMContentLoaded'の中でインスタンスを生成させていた『new MobileMenu();』や
    // コンストラクターの中で初期化していた『this._scrollInit();』を
    // プライベート関数がよばればタイミングで発砲する。
    // こうしておくと、ページを開く際に必ず呼ばれる『new Main;』が発火した時に
    // 設定されるから。徹底的やね。
    new MobileMenu();
    this._scrollInit();
  }

  // destroyメソッドを活かすために配列として格納している。
  // SPAを作ることになった際に必要になってくるスキル。
  destroy() {
    this._observers.forEach(so => so.destroy());
    console.log(this);
  };

  // 複数のオブザーバーを配列として格納する。
  // コンストラクターに配列を置いたら、中のそれぞれのインスタンスが生成するとは何とも摩訶不思議や。
  _scrollInit() {
    this._observers.push(
      new ScrollObserver('.nav-trigger', this._headerBgWhiteCB.bind(this), { once: false }),
      new ScrollObserver('.swiper', this._toggleSlideAnimeCB.bind(this), { once: false }),
      new ScrollObserver('.travel__texts', this._travelTextsCB, { once: true }),
      new ScrollObserver('.cover-slide', this._slideImageCB, { once: true }),
      new ScrollObserver('.appear', this._appearAnimeCB, { once: true }),
      new ScrollObserver('.animate-title', this._textAnimeCB.bind(this), { once: false }),     
      new ScrollObserver('#main-content', this._asideAnimeCB.bind(this), { once: false, rootMargin: "-300px 0px" }),     
    )
  }
  
  // プライベート・メソッドにする。
  // プライベート・メソッド名として、『= function』は取り去って関数定義。
  _toggleSlideAnimeCB(el, isIntersecting) {
    if (isIntersecting) {
      this.heroSlider.autoStart();
    } else {
      this.heroSlider.autoStop();
    }    
  }
  
  _headerBgWhiteCB(el, isIntersecting) {
    if (isIntersecting) {
      this.header.classList.remove('triggered');
    } else {
      this.header.classList.add('triggered');
    }
  };  

  // Travel Texts
  _travelTextsCB(el, isIntersecting) {
    if (isIntersecting) {
      el.classList.add('inview');
    } else {
      el.classList.remove('inview');
    }
  };

  // Slide in Images
  _slideImageCB(el, isIntersecting) {
    if (isIntersecting) {
      el.classList.add('inview');
    } else {
      el.classList.remove('inview');
    }
  };

  // Appear Anime
  _appearAnimeCB(el, isIntersecting) {
    if (isIntersecting) {
      el.classList.add('inview');
    } else {
      el.classList.remove('inview');
    }
  };

  // Title Text Animation
  _textAnimeCB(el, isIntersecting) {
    if (isIntersecting) {
      this.tas.forEach(ta => { if (ta.DOM.el === el) ta.animate(); })     
    } else {
      el.classList.remove('inview');
    }
  };

  // Aside Animation
  _asideAnimeCB(el, isIntersecting) {
    if (isIntersecting) {
      this.asides.forEach(side => side.classList.add('inview'))
    } else {
      this.asides.forEach(side => side.classList.remove('inview'))
    }
  };
}

new Main;

// ///////////////////////////////////////////////////////////
//
// これで散らかっているコードというらしい。
// 十分に整理されていると思っていたが、もう1段階上のレベルを目指さないと
// 実務家としてやっていけないということ。あと10ヶ月。頑張るしかない。
// document.addEventListener('DOMContentLoaded', function() {
//   // Mobile Menu
//   new MobileMenu();
  
//   // Hero Slider
//   const hs = new HeroSlider('.swiper');
//   // 最小秒数を1100にしないとバグる。
//   // hs.autoStart({ delay: 1100 });
//   hs.autoStart();
//   // hs.autoStop();

//   // Text Animation
//   const targets = document.querySelectorAll('.animate-title');
//   // CSSアニメーション版とGSAP版で切り替える。
//   // CSSの切り替えも忘れずに。
//   //    CSS版
//   // const tas = [...targets].map(node => new TextAnimation(node));
//   //    GSAP版
//   const tas = [...targets].map(node => new GsapTextAnimation(node));
//   const _textAnimeCB = function(el, isIntersecting) {
//     if (isIntersecting) {
//       tas.forEach(ta => {
//         if (ta.DOM.el === el) {
//           ta.animate();
//         }
//       })     
//     } else {
//       el.classList.remove('inview');
//     }
//   };
//   const textAnimeSO = new ScrollObserver('.animate-title', _textAnimeCB, { once: true });
//   // 機能を停止させるメソッド
//   // textAnimeSO.destroy();

//   // Slide in Images
//   const _slideImageCB = function(el, isIntersecting) {
//     if (isIntersecting) {
//       el.classList.add('inview');
//     } else {
//       el.classList.remove('inview');
//     }
//   };
//   const slideImageSO = new ScrollObserver('.cover-slide', _slideImageCB, { once: true });
//   // slideImageSO.destroy();

//   // Travel Texts
//   const _travelTextsCB = function(el, isIntersecting) {
//     if (isIntersecting) {
//       el.classList.add('inview');
//     } else {
//       el.classList.remove('inview');
//     }
//   };
//   const travelTextsSO = new ScrollObserver('.travel__texts', _travelTextsCB, { once: true });
//   // slideImageSO.destroy();

//   // Header apear bg white, box-shadow
//   // 思い込みが過ぎる。
//   // 無名関数でelに入ったものをオブジェクト内で必ず展開せなあかんなんて誰も言ってない。
//   // トリガーの要素とは違う要素へアニメーションをかけたいのだから。
//   const header = document.querySelector(".header");
//   const _headerBgWhiteCB = function(el, isIntersecting) {
//     if (isIntersecting) {
//       header.classList.remove('triggered');
//     } else {
//       header.classList.add('triggered');
//     }
//   };
//   // onceをfalseにしないといけない。
//   // つまり、トリガーが画面から出たり入ったりを常に監視し続けるオプションをつけないといけない。
//   const headerBgWhiteSO = new ScrollObserver('.nav-trigger', _headerBgWhiteCB, { once: false });
// });