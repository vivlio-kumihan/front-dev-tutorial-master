document.addEventListener('DOMContentLoaded', function () {
});

const elms = document.querySelectorAll('.animate-title');
const cb = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const ta = new TextAnimation(entry.target);
      ta.animate(); 
      observer.unobserve(entry.target);
    }
  });
};

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0
};

const io = new IntersectionObserver(cb, options);
elms.forEach(elm => {
  io.observe(elm);
})