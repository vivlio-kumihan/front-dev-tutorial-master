## 00 Contents
| key | value |||
| ---- | ---- | ---: | ---: |
|section1|はじめに（27分）|1日|【×1】|
|section2|超初心者はここからスタート（32分）|1日|【×1】|
|section3|コード記述の効率化を学ぼう（11分）|1日|【×1】|
|section4|CSSの基礎を固めよう（Transition編）（174分）|6日|【×5.8】|
|section5|CSSの極めよう（Animation編）（196分）|7日|【×6.5】|
|section6|JavaScriptの基礎を固めよう！（250分）|9日|【×8.3】|
|section7|JavaScriptのより実践的な記述について学ぼう！（176分）|6日|【×5.8】|
|section8|スマホでもキレイに見えるレスポンシブル画面の作り方（59分）|2日|【×2】|
|section9|本格的なWebサイトの作成（214分）|4日|【×3.6】|
|section10|インターネットに公開してみよう（23分）|1日|【×1】|
|section11|さいごに（1分）|1日|【×1】|

## 01

### 事前準備

* ChromeのDL
  * 開発環境を準備できるようにする。
* VSCodeのDL
  * 機能拡張のインストール
    * live Sass Compiler
    * live Server
    * Prettier
* ChatGPTのアカウント作成とブックマーク

### Section1　はじめに（27分）

私がこのコースでWEB STD修習を勧めているか理由を理解してもらう。

1. コース紹介
   * WEB STDの概要説明
     * CSS, JSを学ぶ理由の理解
2. コース準備Part.1
   * VSCode, Chromeを使う理由の理解
3. コース準備Part.2
   * VSCode, Chromeを使う理由の理解
4. プロジェクトの構成とコースの進め方
   * ローカルでサイトを動かすことの理解
     * 【留意点】SassをコンパイルしてCSSを生成するという説明が出てきた時は実演する。
5. Udemyでの学習方法のアドバイス
6. ChatGPTで疑問を解決しよう！！

## 02

### Section2　超初心者はここからスタート（32分）

#### VSCodeのショートカットを覚える
* 任意の単語を複数選択する
* 任意の単語を複製する

#### カスタム・スニペットの登録方法
1. VSCodeを開く。
1. コマンドパレットを開く（`Ctrl + Shift + P` / `Cmd + Shift + P`）。
1. 「Preferences: Configure User Snippets」を選択。
1. 「html.json」を選択するか、ファイルがない場合は作成する。

#### 留意すべき事柄　inlineとblock

要素を横に配置したい場合 inline
要素を縦に配置したい場合 block

display: inlineの要素の位置を調整するには、
その親要素にtext-align属性を与える。

display: blockの要素の位置を調整するには、
自身にmargin: 0 auto;

#### CSSの詳細度
詳細度が深いCSSが効く。
開発ツールで確認して解決していけばいい。

## 03

### Section3　コード記述の効率化を学ぼう（11分）

*　emmetの話。
*　自動補完を使って記述の推奨。
*　VSCodeのショートカットの話。

```
#container>.cls-$*6
#container>.cls-$$*6
#container>.cls-$$*100
```

コード整形

```
shift opition f
```

## 04

### Section4　CSSの基礎を固めよう（Transition編）（174分）【×5.8】

やっていること。

14. 【丁寧に解説】まずはボタンを作りながら、CSSプロパティーを設定してみよう！
    * button要素を使ってCSSを触っている。
15. Transitionプロパティーの使い方を学ぼう（ボタンにホバーアクションを追加！！）
    * hoverした際、buttonの属性を変更する。この時に『フワッと』させる＝アニメーションをかけることをTransitionプロパティーを使って理解させようとしている。

```
transition: フワッとさせたい属性　時間　移り変わりの緩急具合　n秒後にアニメーションする遅延時間;

別々のアニメーションを設定できる。
transition: color .3s ease-in-out 1s,
            background-color .3s ease 2s
```

16. 【Sass】CSSをSassで記述してみよう！

特記することなし。
&を使って入れ子の記述に慣れること。

## 05

### Section4　CSSの基礎を固めよう（Transition編）（174分）【×5.8】

17. 【Tips】Chromeの開発ツールの使い方について学ぼう
  * 要素の選択・CSSの効きを確認する。
  * 自動更新はしない。

18. 【おさらい】CSSセレクターとSassネスティング
  * emmetの補完機能でindex.htmlのテンプレーを出力させる。
  * SCSSの設定。
  * & >, 隣接の使い方。
  * 詳細度を上げる。

19. SassからCSSへの変換がうまくいかない時の対処法
  * 説明まま。特記事項なし。

20. ★重要★Live Sass Compilerのトランスパイル対象フォルダ
  * 説明まま。特記事項なし。

21. ホバーで影ができるボタンを作ってみよう
  * 開発ツールでhoverの状態を確認する方法。
  * 開発ツールでbox-shadowの効き具合をシュミレーションする方法
  * 開発ツールでcolorの透明度を変更を変更を変更をシュミレーションする。

## 06

### Section4　CSSの基礎を固めよう（Transition編）（174分）【×5.8】

22. 【演習】色々なエフェクトのボタンを作ってみよう
  * 説明まま。特記事項なし。ここまで説明されたCSSのおさらい。
23. 【解答】色々なエフェクトのボタンを作ってみよう
  * 説明まま。特記事項なし。ここまで説明されたCSSのおさらい。
24. Transformプロパティーの使い方をマスターしよう
  * アニメーションをさせる場合には、まずは、Transformプロパティーで動きを考える。
  * 『中央に揃える』display: block編の復習。width: 100%でないと効かない旨が特記事項。
  * transform属性の値：transform, rotate, skew, scaleなどを覚えておく。
  * transform-origin
    * どこを始点にobjectを動かすか。
      * 左上から始めて右上、右下、左下 + 中央
        * top left, top right, bottom right, bottom left, center center
      * 左上を始点に数値指定も可能。
  * 複数指定したい場合
    * transform: translate(50px, 50px) scale(2, 1.5);という具合に値を『スペース』で区切る。


## 07

### Section4　CSSの基礎を固めよう（Transition編）（174分）【×5.8】

25. PositionとZ-indexをマスターして思い通りのレイアウトを組もう！！
  * __よくわかってないところあり__
26. Transform, Position, Z-indexの復習！背景色がスライドするボタンを作ってみよう！
  * 特記事項なし。サンプルとしてコードは収集しておいた。
  * スライドする背景にspan要素を使う。
27. ::before, ::after, 疑似要素を使って無駄な記述を減らそう！
  * 特記事項なし。サンプルとしてコードは収集しておいた。
  * スライドする背景にspan要素ではなく擬似要素を使う。
  * 理由は、文章構造に関係のない要素を排除するため。

## 08

### Section4　CSSの基礎を固めよう（Transition編）（174分）【×5.8】

28. タイミングファンクション(a.k.a easing-function)でアニメーションをオサレにしよう！
  * timing functionは、transition: transform 0.3s;の第3引数に設置する。
  * 開発ツールでビジュアルでわかりやすく設定値を作ることができる。
  * ショートカットとして、ease, ease-in-outなどがある。
29. 【発展】3Dアニメーションでより豊かな表現方法を身に着けよう
  * 四角形のボックスに蓋をするようなアニメーションを作成する。
  * 蓋を擬似要素を作る。
  * 親要素にtransform-style属性『preserve-3d』、perspective属性『100〜1000px』を設定。
  * 子要素にtransform属性『rotateX(NNdeg)』、transform-origin属性を上辺か下辺かで設定する。
  * 親要素に書かれた文字が隠れてしまう。
  * これを回避するために親要素の子要素を作成してそこに文字を入れる。
  * これはposition属性でコントロールできない。
  * transform属性を使う。transform: translateZ(20px);
30. 【発展】【演習】3Dアニメーション ~ キュービックのボタンを作成してみよう
  * 

## 09

### Section4　CSSの基礎を固めよう（Transition編）（174分）【×5.8】

31. HTML要素を思った通りに配置するレイアウト方法まとめ
    * 横方向の配置
      * inline, block特性によって変わる
      * inlineではtext-align属性を設定する
      * blockでは、margin属性を設定する
      * どう設定したらいいかがわかっていればよい。
    * 上下方向の配置
      * position属性を使う
      * flex属性を使う
        * デフォルトの挙動
          * justify-contentjustify-contentに設定する値についてわかればいい。
          * aligin-itemsの設定に設定する値についてわかればいい。
    * 縦並びにする方法
      * 親要素でflexを設定する。
      * 子要素の横幅を動的に変化させることができる。
        * 子要素にflex-grow: 1;とするとそれぞれの子要素が均等に全幅を埋めるようになる。
        * 一つ目だけの値をflex-grow: 2とすると2：1：1となる。
        * 一つ目を2、二つ目を3とすると2：3：1となる。
        * 一つ目をflex-basis: 300pxとするとこの値を確保してから他のものが適用される。
        * 何もわからないで子要素に一括にflex-basis: 300pxとした場合、スクリーンサイズが合計に足りない場合は3等分になる。
        * この状態で、どれか一つをflex-shrink: 0;とすると設定していた300pxが『縮み無しに300pxを確保』する
        * 尚且つ、display: flex;を指定している親要素にflex-wrap: wrap;とするとそれぞれの子要素が指定した横幅を確保するので、結果として改行して表示することになる。

## 10

### Section5 CSSを極めよう（Animation編）

34. 【簡単！】アニメーションを使って簡単なローダーを作ってみましょう！
  * div.bounce$*3
  * keyframeは0％から100％までの動きを指定する。
  * animation-delayにマイナスを設定すると始まる時間が早くなる。
35. 【文法】AnimationとKeyframesの文法を学ぼう！
  * animation-iteration-count 属性は何回アニメーションを繰り返すかの指定。
  * animation-direction: alternateで3回繰り返すと。。。
  * 
36. 【Sass】@Mixinを使った一歩上のSassコーディング！！</span></span>
  * backgroundでもやってみせる

## 11

### Section5 CSSを極めよう（Animation編）

37. Mixinのファイルを分割して管理してみよう
  * 名前空間として『mixin』が使われる。
    * @use "mixin";
    * @include mixin.animation($name: sk-bouncedelay);という記述になる。
  * 名前空間に別名を設定することができる。『mxn』が使われる。
    * @use "mixin" as mxn;
    * @include mxn.animation($name: sk-bouncedelay);という記述になる。
  * 『*』を使うと省略できる。
    * @use "mixin" as *;
    * @include animation($name: sk-bouncedelay);という記述になる。
    * 落とし穴あり、_mixin1.scss、_mixin2.scssという2つのSASSファイルがあるとして、
      * @use "mixin1" as *;　@use "mixin2" as *;　というふうに書くとどちらのSASSを使ったらいいわかならなくなる。
      * なので、通常は名前空間で管理する。
38. 【Part.1】Sassファイルの分割方法について学ぼう
  * @use
    * 例えば変数を格納したファイルから変数名で値を取りたい場合に使う。
      * 変数を格納するファイルに　$cRed = red;　としておき、別ファイルから呼び込む。
      * 別ファイルから　@use "拡張子を除いたファイル名";
      * これで別ファイル内で変数が使える。
  * @forward
    * 複数の変数名を収めたファイルがあった場合、それらを人まとまりのファイルのように扱える。
      * それぞれに変数を設定した、_file1.scss, _file2.scss　というファイルがあったとして、
      * 取りまとめるファイルを作る。 ファイル名を例えば、_global.scss　として、
      * @forward "child";　@forward "child2";と書き連ねていく。
      * そして、変数を使いたいファイルから　@use "global" as *;　などとして使う。
39. 【Part.2】Sassファイルの分割方法について学ぼう
  * 特記事項なし
40. ★重要★DartSassへの移行対応（以降のレクチャー前に一度ご確認ください）
  * 特記事項なし


## 12

### Section5 CSSを極めよう（Animation編）

41. 【Tips】疑似セレクターを使ってみよう！nth-childのハマりやすい罠とは！？
  * 使い方をイメージできていればよい。
    * 擬似要素 ::before, ::after
    * 擬似セレクター :hover, :focus, :active, :visit
    * 擬似セレクター :nth-child, :nth-of-type
      * 偶数を表現したい。
        * &:nth-child(2n) {}
        * &:nth-child(even) {}
      * 奇数を表現したい。
        * &:nth-child(2n + 1) {}
        * &:nth-child(odd) {}
      * :nth-childと:nth-of-typeの違いを説明できるか？
      * :first-child, :last-childは理解できているか？
      * :not(:first-of-type) {} 私がよく使うやつ。

42. 【Sass】@for文で一歩上のSassコーディング！！
```sass
@use "sass:math";

$cBlack: black;

.three-dot-spinner {
  text-align: center;

  & div {
    display: inline-block;
    width: 18px;
    height: 18px;
    background-color: $cBlack;
    border-radius: 50%;
    animation: sk-bouncedelay 1.4s infinite;

    // &:nth-child(1) {
    //   animation-delay: -0.32s;
    // }
    // &:nth-child(2) {
    //   animation-delay: -0.16s;
    // }

    // #{$i}は変数展開
    // for文の中でセレクターを書いていることに注目。
    // セレクターの引数として変数を展開するためにsassの記法として{}で囲む。
    // インターポレーションというらしい。
    // 属性の値として展開する場合は、$iでよい。
    @for $i from 1 through 2 {
      &:nth-child(#{$i}) {
        // と言われてもこれはすごい書き方。calc()要らないのだ。
        animation-delay: -0.32s / $i;
        // image1.png, image2.png, image3.png...としていきたい場合は、
        // urlの引数の部分での変数展開となるので#{}で囲む
        // background-image: url(/img/image#{$i}.png);
        // animation-delay: math.div(-0.32s, $i);
      }
    }
  }
}

@keyframes sk-bouncedelay {
  0% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
  80% {
    transform: scale(0);
  }
  100% {
    transform: scale(0);
  }
}
```

## 13

### Section5 CSSを極めよう（Animation編）

44.  【解答 Part. 1】Animationで色んなローダーを作ってみよう
    * コードを見て復習するしかない。
45. 【解答 Part. 2】Animationで色んなローダーを作ってみよう
    * コードを見て復習するしかない。

githubに44-47までのサンプルを作るページを設置する。
うだうだ書くより、サンプル集のページを作る。

## 14

### Section5 CSSを極めよう（Animation編）

48. 【Sass】@Each文で配列をループ！フェードインアニメーションをサクッと作ってみよう！



49. 【Tips】今時の画像の表示方法まとめ ~ <img srcset><picture><background-image>の使い分け
50. 【実践】画像にオサレなカバースライドアニメーションを適用してみよう！！
51. 【実践】画像にオサレなホバーアニメーションを適用してみよう！！
52. 【Tips】Background-imageを画像タグのようにアスペクト比を保ちながら表示する小技
53. 【Tips】アニメーションに最適

# 画像を表示させる



## Section6　JavaScriptの基礎を固めよう！（250分）【×8.3】

section7　JavaScriptのより実践的な記述について学ぼう！（176分）【×5.8】
section8　スマホでもキレイに見えるレスポンシブル画面の作り方（59分）【×2】
section9　本格的なWebサイトの作成（214分）【×3.6】
section10　インターネットに公開してみよう（23分）【×1】
section11　さいごに（1分）【×1】

50営業日中で終わらせる



# VSCodeの拡張機能のインストール
- Prettier - Code formatter  
  `esbenp.prettier-vscode`

  様々な言語の整形を行ってくれる  

- Live Server  
  `ritwickdey.LiveServer`  

  簡易的なサーバーを簡単に起動することができる

- Live Sass Compiler  
  `glenn2223.live-sass`  

  Sass -> CSSへの変換（トランスパイル）を行ってくれる

# box-shadowでの影の付け方
オプションは10個ある。
outset、inset
X軸・Y軸方向、ボケ（Blur）、広がり（Spread）、色

# position: stikyとoverflow: hidden

親要素に`overflow: hidden`が適用されていると`position: stiky`は効かなくなる。


# z-index

### このカーテンアニメーションの肝
* `overflow: hidden`
* `z-index: 1`と`z-index:　-1`
* 明示的な`span`の`inline-block`

```html
<div id="container">
    <button class="btn slide-bg"><span></span>Button</button>
</div>
```

```scss
$cWhite: white
$cBlack: black

#container 
  text-align: center

.btn
  position: relative
  margin: 50px 0
  padding: 10px 40px
  font-weight: 600
  color: $cBlack
  background-color: $cWhite
  border: 1px solid $cBlack
  cursor: pointer
  transition: color 1s
  overflow: hidden
  z-index: 1
  span
    display: inline-block
    position: absolute
    top: 0
    left: -100%
    width: 100%
    height: 100%
    background-color: $cBlack
    transition: all .5s
  &:hover
    color: $cWhite
    span
      transform: translateX(100%)
      z-index: -1
```

本来であれば、構造に関係のないspanタグはつけてはいけない。
対処法として擬似要素を使う。
変更点はspan属性を擬似要素で置き換えるだけ。
なお、擬似要素を使う際にはcontent: ""が必須。

```scss
.btn
  &::before
    content: ""
  &:hover
    &::before
      ...
```

# display: flex

覚えるべきは、
それぞれの子要素に
flex-basis: 数値はなんでもいい
flex-grow: 1
を設定すると等幅になる。

プラス
親要素に
flex-wrap: wrap
を設定してflex-basisに値を与えると
その値以下になったらリフローしてくれる。

```scss
.parent 
  display: flex
  justify-content: center
  align-items: center
  flex-wrap: wrap
  width: 100%
  height: 600px
  background-color: rgb(81, 218, 218)
  .child 
    flex-basis: 300px
    flex-grow: 1
    height: 100%
    font-weight: 600
    background-color: orange
    &.v1
    &.v2 
      flex-grow: 5
      background-color: palevioletred
    &.v3 
      background-color: rebeccapurple
```

# ローダーをやる

https://github.com/tobiasahlin/SpinKit

# アニメーション



```scss
.rect 
  display: inline-block
  width: 100px
  height: 100px
  background-color: $cBlack
  animation: sk-bouncedelay 1.4s 
  animation-timing-function: ease
  // アニメーションが始まるまでの時間を調整する。
  animation-delay: 3s
  // アニメーションを逆転させる。
  // animation-direction: reverse
  // アニメーションを繰り返す回数を指定する。
  animation-iteration-count: infinite
  // 効果を往復する。
  animation-direction: alternate
  animation-direction: alternate-reverse
  // 組み合わせだと奇数がいいかも
  animation-iteration-count: 3
  animation-direction: alternate
  // アニメーションの最後の状態を保持する。
  animation-fill-mode: forwards

.paused
  animation-play-state: paused

@keyframes sk-bouncedelay 
  // タイミングをまとめることができる。
  0%, 50%
    transform: scale(0)
  100%
    transform: scale(1)
```



# @for文

例えば、以下のような繰り返しで表現できるCSSがあった場合に`@for`文で対応する。

```SCSS
.sk-chase-dot:nth-of-type(1) { animation-delay: -1.1s; }
.sk-chase-dot:nth-of-type(2) { animation-delay: -1.0s; }
...
...
.sk-chase-dot:nth-of-type(6) { animation-delay: -0.6s; }

.sk-chase-dot:nth-of-type(1):before { animation-delay: -1.1s; }
.sk-chase-dot:nth-of-type(2):before { animation-delay: -1.0s; }
...
...
.sk-chase-dot:nth-of-type(6):before { animation-delay: -0.6s; }
```

## 式

`@for` [index（変数・インデックス）] 
`from` [1回 ==> 1] 
`through` [繰り返す要素の数（回数）]
`{繰り返したい処理}`

__例文__

```SCSS
// 繰り返したい要素の数===回数
$number-of-dots: 6;
// アニメーションを遅らせるタイミング（必要であれば設定）
$animation-duration: 1.1s;

@for $idx from 1 through $number-of-dots {
  $delay: -$animation-duration + ($idx * 0.1s);

  .sk-chase-dot:nth-of-type(#{$idx}) {
    animation-delay: $delay;
  }

  .sk-chase-dot:nth-of-type(#{$idx}):before {
    animation-delay: $delay;
  }
}
```



# Mix-in

> __animation-duration__
> 1回のアニメーション周期が完了するまでの再生時間。

> __animation-delay__
> アニメーションをいつ開始するかを指定。

> __animation-timing-function__
> アニメーションがそれぞれの周期の中でどのように進行するかを設定。ease, ease-in, ease-out, ease-in-out等



```scss

// 引数には属性の値が入る。
@mixin animation(
  $name,
  $duration: 1.4s,
  $delay: 3s,
  $timing: cubic-bezier(0.25, 0.1, 0.28, 1.9),
  $fill-mode: forwards
){
  // 属性と値の引き合わせをここで設定。
  animation: {
    name: $name;
    duration: $duration;
    delay: $delay;
    timing-function: $timing;
    fill-mode: $fill-mode;
  }
}

.rect {
  display: inline-block;
  width: 100px;
  height: 100px;
  background-color: $cBlack;
  // 名前の変数に値を入れるだけでよく、コードの見通しがよくなる。
  @include animation($name: sk-bouncedelay)
}

.paused {
  animation-play-state: paused;
}

@keyframes sk-bouncedelay {
  from {
    transform: scale(0);
    background-color: black;
  }
  to {
    transform: scale(1);
    background-color: green;
  }
}
```

# JS
## reduce
```
document.addEventListener('DOMContentLoaded', function () {
    const el = document.querySelector('.animate-title');
    
    // // 配列ではないが、『文字』は『for』で扱える。
    // const str = el.innerHTML.trim();
    // let concatStr = '';
    
    // for(let c of str) {
      //     c = c.replace(/\s+/, '&nbsp;');
      //     concatStr += `<span class="char">${c}</span>`;
      // }
      
    const str = el.innerHTML.trim().split("");
    // reduceで使う場合は配列にする。
    // 引数は、accumulation(集積)、current(現在)
    // 第二引数をから文字にすることで、 currにのみループの対象要素が回ってくるようにする
    el.innerHTML = str.reduce((acc, curr) => {
      curr = curr.replace(/\s+/, '&nbsp;');
      return `${acc}<span class="char">${curr}</span>`;
    }, "");
    
    // 『第二引数』に初期値を据えることで正しく計算が行える。
    nums = [1,2,3,4,5];
    const result = nums.reduce((acc, cur) => {
      return acc + cur * 2;
    }, 0);
    console.log(result);

    const string = "hello";
    const strArr = string.split("");
    const result2 = strArr.reduce((acc, cur) => {
      return acc + `<span>${cur}</span>`;
    }, "")
    console.log(result2)
});
```


リセットCSS
 WEBフォント
 版面を決める
  左右のアキ
  セクション毎の下のアキ