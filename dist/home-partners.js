(() => {
  const section = document.querySelector('#doi-tac.home-partners');
  if (!section) return;
  const ribbon = section.querySelector('.partners-ribbons');
  const track = section.querySelector('.partners-track');
  const original = track.querySelector('.partners-group:not([aria-hidden])');
  const copy = JSON.parse(section.querySelector('#partners-copy').textContent);
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const count = original.children.length;
  const interval = 2500;
  let index = 0, position = 0, pitch = 0, timer, inView = false, hovered = false, focused = false, moving = false;
  const queue = [];
  const duration = () => reduce.matches ? 240 : 400;
  const eligible = () => inView && !hovered && !focused && !document.hidden;
  function paint() {
    track.style.transform = `translate3d(${-(count + position) * pitch}px,0,0)`;
  }
  function schedule(delay = interval) {
    clearTimeout(timer);
    section.dataset.running = String(eligible());
    if (eligible() && !moving) timer = setTimeout(() => step(1), delay);
  }
  function measure() {
    // Whole visible slots: a completed slide replaces just one edge logo.
    const width = ribbon.clientWidth;
    const visible = width >= 900 ? 4 : width >= 600 ? 3 : width >= 280 ? 2 : 1;
    const gap = parseFloat(getComputedStyle(section).getPropertyValue('--partner-gap'));
    pitch = width / visible;
    section.style.setProperty('--partner-cell', `${pitch - gap}px`);
    paint();
  }
  function step(direction) {
    clearTimeout(timer);
    queue.push(direction);
    if (!moving) advance();
  }
  function advance() {
    if (!queue.length) { schedule(interval - duration()); return; }
    moving = true;
    section.dataset.stepping = 'true';
    const from = index, target = index + queue.shift(), travel = duration();
    let began;
    function frame(now) {
      began ??= now;
      const progress = Math.min(1, (now - began) / travel);
      position = from + (target - from) * (0.5 - Math.cos(Math.PI * progress) / 2);
      paint();
      if (progress < 1) { requestAnimationFrame(frame); return; }
      // Identical groups on both sides make either wrap visually continuous.
      index = (target + count) % count;
      position = index;
      paint();
      section.dataset.index = String(index);
      moving = false;
      section.dataset.stepping = 'false';
      advance();
    }
    requestAnimationFrame(frame);
  }
  function translate() {
    const lang = document.documentElement.lang;
    const c = copy[lang.startsWith('zh') ? 'zh' : lang.startsWith('en') ? 'en' : 'vi'];
    section.querySelector('[data-partner-copy="title"]').textContent = c.title;
    ribbon.setAttribute('aria-label', c.list);
    original.setAttribute('aria-label', c.list);
    section.querySelectorAll('[data-partner-step]').forEach(el => el.setAttribute('aria-label', Number(el.dataset.partnerStep) < 0 ? c.previous : c.next));
  }
  translate();
  if (!('IntersectionObserver' in window)) return;
  section.classList.add('partners-ready');
  section.dataset.index = '0';
  section.dataset.stepping = 'false';
  section.querySelectorAll('button[hidden]').forEach(el => el.hidden = false);
  measure();
  new IntersectionObserver(entries => {
    inView = entries[0].isIntersecting;
    if (inView) section.querySelectorAll('img[loading="lazy"]').forEach(img => img.loading = 'eager');
    schedule();
  }, {threshold: 0}).observe(ribbon);
  if ('ResizeObserver' in window) new ResizeObserver(measure).observe(ribbon);
  else window.addEventListener('resize', measure);
  section.querySelectorAll('[data-partner-step]').forEach(el => el.addEventListener('click', () => step(Number(el.dataset.partnerStep))));
  const carousel = section.querySelector('.partners-carousel');
  carousel.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') { hovered = true; schedule(); } });
  carousel.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse') { hovered = false; schedule(); } });
  carousel.addEventListener('focusin', e => { focused = e.target.matches(':focus-visible'); schedule(); });
  carousel.addEventListener('focusout', () => {
    queueMicrotask(() => { focused = carousel.contains(document.activeElement) && document.activeElement.matches(':focus-visible'); schedule(); });
  });
  carousel.addEventListener('pointerdown', () => { focused = false; schedule(); }, {passive: true});
  let touchX = null;
  ribbon.addEventListener('pointerdown', e => { if (e.pointerType === 'touch') touchX = e.clientX; }, {passive: true});
  ribbon.addEventListener('pointerup', e => {
    if (touchX === null) return;
    const delta = touchX - e.clientX;
    if (Math.abs(delta) > 30) step(Math.sign(delta));
    touchX = null;
  }, {passive: true});
  ribbon.addEventListener('pointercancel', () => touchX = null);
  ribbon.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); step(e.key === 'ArrowRight' ? 1 : -1); }
  });
  // Autoplay is explicitly requested for this preview, including reduced-motion;
  // use a shorter transition there. Hover and keyboard focus stop automatic steps.
  document.addEventListener('visibilitychange', () => schedule());
  document.addEventListener('hotprint:language', translate);
  reduce.addEventListener('change', () => schedule());
})();
