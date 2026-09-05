/* ===================================================================
   DRIFTING — main.js
   1. Navbar scroll state
   2. Mobile nav toggle
   3. Hero entrance timeline (GSAP)
   4. Scroll reveal (IntersectionObserver)
   5. Lookbook horizontal scroll (drag + arrows)
   6. Category switcher
   7. Footer year
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 1. NAVBAR SCROLL STATE ---------- */
  const navbar = document.getElementById('navbar');
  const onScroll = () => navbar.classList.toggle('is-scrolled', window.scrollY > 40);
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- 2. MOBILE NAV TOGGLE ---------- */
  const burgerBtn = document.getElementById('burgerBtn');
  const mobileNav = document.getElementById('mobileNav');

  const closeMobileNav = () => {
    document.body.classList.remove('nav-open');
    burgerBtn.setAttribute('aria-expanded', 'false');
    burgerBtn.setAttribute('aria-label', 'Abrir menú');
  };

  burgerBtn.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('nav-open');
    burgerBtn.setAttribute('aria-expanded', String(isOpen));
    burgerBtn.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  });

  mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMobileNav));
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMobileNav(); });

  /* ---------- 3. HERO ENTRANCE ---------- */
  const hasGSAP = typeof gsap !== 'undefined';

  if (hasGSAP && !prefersReducedMotion) {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.to('#heroImg', { scale: 1, duration: 1.8, ease: 'power2.out' }, 0)
      .to('.hero__headline .word', { y: 0, opacity: 1, duration: 1, stagger: 0.1 }, 0.2)
      .to('.hero__subtext', { y: 0, opacity: 1, duration: 0.8 }, 0.6)
      .to('.hero__ctas', { y: 0, opacity: 1, duration: 0.8 }, 0.72);

    gsap.to('#heroImg', {
      yPercent: 6,
      ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
    });

    gsap.to('.hero__tread', {
      yPercent: -18,
      ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
    });
  } else {
    document.querySelectorAll('.hero__headline .word').forEach(w => { w.style.transform = 'none'; w.style.opacity = '1'; });
    document.querySelectorAll('.hero__subtext, .hero__ctas').forEach(el => { el.style.transform = 'none'; el.style.opacity = '1'; });
  }

  /* ---------- 4. SCROLL REVEAL ---------- */
  const revealEls = document.querySelectorAll('[data-reveal]');
  if (prefersReducedMotion) {
    revealEls.forEach(el => el.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(el => revealObserver.observe(el));
  }

  /* ---------- 5. LOOKBOOK SCROLL ---------- */
  const lookTrack = document.getElementById('lookTrack');
  const lookPrev = document.getElementById('lookPrev');
  const lookNext = document.getElementById('lookNext');

  if (lookTrack) {
    const scrollAmount = () => (lookTrack.querySelector('.look')?.offsetWidth || 300) + 20;
    lookPrev.addEventListener('click', () => lookTrack.scrollBy({ left: -scrollAmount(), behavior: 'smooth' }));
    lookNext.addEventListener('click', () => lookTrack.scrollBy({ left: scrollAmount(), behavior: 'smooth' }));

    /* drag to scroll on desktop */
    let isDown = false, startX = 0, scrollStart = 0;
    lookTrack.addEventListener('pointerdown', (e) => {
      isDown = true;
      lookTrack.setPointerCapture(e.pointerId);
      startX = e.clientX;
      scrollStart = lookTrack.scrollLeft;
      lookTrack.style.cursor = 'grabbing';
    });
    lookTrack.addEventListener('pointermove', (e) => {
      if (!isDown) return;
      lookTrack.scrollLeft = scrollStart - (e.clientX - startX);
    });
    const endDrag = () => { isDown = false; lookTrack.style.cursor = ''; };
    lookTrack.addEventListener('pointerup', endDrag);
    lookTrack.addEventListener('pointerleave', endDrag);
  }

  /* ---------- 6. CATEGORY SWITCHER ---------- */
  const catImages = {
    jeans: 'https://images.unsplash.com/photo-1629045246540-16a761db8b35?w=1100&q=80&auto=format&fit=crop',
    camperas: 'https://images.unsplash.com/photo-1771736821200-530db51fb679?w=1100&q=80&auto=format&fit=crop',
    gorras: 'https://images.unsplash.com/photo-1521886243261-7fc82ca5cb60?w=1100&q=80&auto=format&fit=crop',
    remeras: 'https://images.unsplash.com/photo-1586231912972-d0970f9ce787?w=1100&q=80&auto=format&fit=crop',
    accesorios: 'https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?w=1100&q=80&auto=format&fit=crop'
  };
  const catImg = document.getElementById('catImg');
  const catBtns = document.querySelectorAll('.cat-btn');

  catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      catBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const src = catImages[btn.dataset.cat];
      if (src && catImg) {
        catImg.style.opacity = '0';
        setTimeout(() => {
          catImg.src = src;
          catImg.style.opacity = '1';
        }, 200);
      }
    });
  });
  if (catImg) catImg.style.transition = 'opacity .25s ease';

  /* ---------- 7. FOOTER YEAR ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
