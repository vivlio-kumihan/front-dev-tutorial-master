document.addEventListener('DOMContentLoaded', function() {
  const targets = document.querySelectorAll('.animate-title');
  const tas = [...targets].map(node => new TextAnimation(node));
  const cb = function(el, isIntersecting) {
    if (isIntersecting) {
      tas.forEach(ta => {
        if (ta.DOM.el === el) {
          ta.animate();
        }
      })     
    } else {
      el.classList.remove('inview');
    }
  };
  const so = new ScrollObserver('.animate-title', cb, { once: false});
  // so.destroy();
});