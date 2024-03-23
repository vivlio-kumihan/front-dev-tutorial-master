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

このカーテンアニメーションの肝
overflow: hidden
z-index: 1とz-index:　-1
明示的なspanのinline-block

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

本来であれば、耕造に関係のないspanタグはつけてはいけない。
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

# Mix-in

```scss
$cBlack: black;

body {
  text-align: center;
}

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