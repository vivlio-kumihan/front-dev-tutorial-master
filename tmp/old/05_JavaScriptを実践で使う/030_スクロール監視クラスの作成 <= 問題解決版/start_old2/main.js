document.addEventListener('DOMContentLoaded', function () {

  const cb = function(elm, isIntersecting) {
    if (isIntersecting) {
      const ta = new TextAnimation(elm);
      ta.animate(); 
    }
  }

  const so = new ScrollObserver('.animate-title', cb);



});

class ScrollObserver {
  constructor(elms, cb, options) {
    this.elms = document.querySelectorAll(elms);
    const defaultOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0
    };  
    this.cb = cb;  
    this.options = Object.assign(defaultOptions, options);
    this._init();
  }
  _init() {
    const callBack = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.cb(entry.target, true);
          observer.unobserve(entry.target);
        } else {
          this.cb(entry.target, false);
        }
      });
    };  
    const io = new IntersectionObserver(callBack.bind(this), this.options);
    this.elms.forEach(elm => {
      io.observe(elm);
    });      
  }
}
