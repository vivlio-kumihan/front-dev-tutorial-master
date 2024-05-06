// Ver.11は、かなりダメな仕様に成り下がっている模様。
// かなり心配なライブラリだね。多分、またハマるわきっと。

// 無限ループスライドの作成注意事項
//    ◯CSSは『width: 100vw;』または、『width: 100%;』
//        .swiper {
//          width: 100vw;
//          height: 500px;
//          overflow: visible !important;
//        }
//    ◯画面に3分割のスライドを表示させたいのなら、6枚のスライドを用意。
//    ◯ループ終端で次のループの最初が表示されない場合に『loopAdditionalSlides: 1』を設定。ただし、無くてもいい場合もある。クソだ。
//    ◯『centeredSlides: true3』は、分割させる場合にセンターのスライドを視線誘導用にする設定。
//    ◯『breakpoints』必須。下のコード読んだらわかる。

const swiper = new Swiper('.swiper', {
  // 多分多用するのはこちらのアニメーション。全画面でやると思う。
  // effectがなければ画面に3枚か5枚のスライドを横に並べるものになる。
  // effect: 'fade',
  effect: 'coverflow',
  loop: true,
  // loopAdditionalSlides: 1, 
  autoplay: {
    delay: 2000, //=> 2秒間静止
  },
  speed: 1000, //=> 1秒のアニメーション
  slidesPerView: 1,
  breakpoints: {
      1024: {
          slidesPerView: 3,
      }
  }, 
  centeredSlides: true,
  // 縦向きのスライド
  // direction: 'vertical',
  // スワイプは、デフォルトで有効
  // allowTouchMove: false,
});