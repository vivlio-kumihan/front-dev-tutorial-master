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


