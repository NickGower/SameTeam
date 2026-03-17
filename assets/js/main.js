// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}

// Gallery slideshow
(function () {
  const slideshow = document.getElementById('gallery-slideshow');
  if (!slideshow) return;

  const slides = slideshow.querySelectorAll('.slide');
  if (slides.length === 0) return;

  const dotsContainer = slideshow.querySelector('.slide-dots');
  const slidesWrapper = slideshow.querySelector('.slides');
  let current = 0;

  // Build dots
  slides.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.setAttribute('aria-label', 'Go to slide ' + (i + 1));
    if (i === 0) btn.classList.add('active');
    btn.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(btn);
  });

  function goTo(index) {
    current = (index + slides.length) % slides.length;
    slidesWrapper.style.transform = `translateX(-${current * 100}%)`;
    dotsContainer.querySelectorAll('button').forEach((b, i) => {
      b.classList.toggle('active', i === current);
    });
  }

  slideshow.querySelector('.slide-prev').addEventListener('click', () => goTo(current - 1));
  slideshow.querySelector('.slide-next').addEventListener('click', () => goTo(current + 1));

  // Auto-advance every 5s
  setInterval(() => goTo(current + 1), 5000);
})();
