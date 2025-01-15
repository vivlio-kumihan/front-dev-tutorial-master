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


document.addEventListener('DOMContentLoaded', function () {
    const ta = new TextAnimation('.animate-title');
    const ta2 = new TextAnimation('.animate-title-2');
    setTimeout(() => {
        ta.animate();
        ta2.animate();
    }, 1000);
    
});
