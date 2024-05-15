document.addEventListener('DOMContentLoaded', function () {
  const targets = document.querySelectorAll('.animate-title');

  // 要素を回しているから一つ一つのような勘違いをしてしまったが、
  // この前で、インスタンスがスプールされているイメージが良い。
  const cb = (entries, observer) => {
    entries.forEach(entry => {
      // ここのifで画面に入ったかどうかを判断している。
      // インスタンスに対してisIntersectingメソッドを送ると
      // 要素が画面に入ったらtrue、出たらfalseを返す。
      if (entry.isIntersecting) {
        console.log(entry);
        // sectionなど連続した要素があり、その中の例えば見出しなど
        // 画面に入ったタイミングで表示させるなどのアニメーションを
        // 作る際の注意点。
        // アニメーションのクラスに対してタグ（文字列）で送っちゃダメ！
        // const ta = new TextAnimation('.animate-title');
        // 必ずDOM（オブジェクト）で送らないとバグを生む原因になる。
        // => text-animation.jsへ続く
        // const ta = new TextAnimation(entry.target);
        // ta.animate(); 
        const gta = new GsapTextAnimation(entry.target);
        gta.animate(); 
        // 初回に発動したらもう監視対象から外すよという命令
        observer.unobserve(entry.target);
      }
    });
  };
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0
  };

  // この2行がメインの命令。////////////////////////////////////////
  // スクロールの監視をするクラスを定義しておいて。。。
  const io = new IntersectionObserver(cb, options);
  // 取り込んだ要素を回してインスタンスを発生させる。。。
  targets.forEach(target => {
    // そして、それぞれの対象要素にスクロールの監視を起動。
    // 画面に対象要素の出入りのタイミングでコールバック関数が呼ばれて処理が発動する。。。
    io.observe(target);
  });
});