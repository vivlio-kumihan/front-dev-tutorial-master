document.addEventListener('DOMContentLoaded', function() {
  const cb = function(el, isIntersecting) {
    if (isIntersecting) {
      el.classList.add('inview');
    } else {
      el.classList.remove('inview');
    }
  };
  const so = new ScrollObserver('.cover-slide', cb, { once: false });
  // so.destroy();

  
});