(() => {
  const html = document.documentElement;
  const langButton = document.getElementById('languageToggle');
  const menuButton = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');
  const supported = ['en', 'fa'];
  let language = localStorage.getItem('samiee-language') || 'en';
  if (!supported.includes(language)) language = 'en';

  function applyLanguage(next) {
    language = next;
    html.lang = next;
    html.dir = next === 'fa' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-en][data-fa]').forEach((el) => {
      const value = el.getAttribute(`data-${next}`);
      if (value !== null) el.textContent = value;
    });
    document.querySelectorAll('[data-en-placeholder][data-fa-placeholder]').forEach((el) => {
      el.placeholder = el.getAttribute(`data-${next}-placeholder`);
    });
    if (langButton) langButton.textContent = next === 'en' ? 'FA' : 'EN';
    localStorage.setItem('samiee-language', next);
  }
  applyLanguage(language);
  langButton?.addEventListener('click', () => applyLanguage(language === 'en' ? 'fa' : 'en'));

  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    nav?.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
  });
  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('open'); document.body.classList.remove('menu-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  }));

  document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });

  const emailLink = document.getElementById('studioEmailLink');
  if (emailLink && typeof STUDIO_EMAIL !== 'undefined') {
    emailLink.textContent = STUDIO_EMAIL;
    emailLink.href = STUDIO_EMAIL.includes('REPLACE_') ? '#contactForm' : `mailto:${STUDIO_EMAIL}`;
  }
  const form = document.getElementById('contactForm');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const note = document.getElementById('formNote');
    if (typeof STUDIO_EMAIL === 'undefined' || STUDIO_EMAIL.includes('REPLACE_')) {
      note.textContent = language === 'fa'
        ? 'ابتدا ایمیل واقعی خود را در فایل assets/js/config.js وارد و سایت را دوباره منتشر کنید.'
        : 'Set your real email in assets/js/config.js, then publish the site again.';
      return;
    }
    const data = new FormData(form);
    const subject = encodeURIComponent(`[Website] ${data.get('subject')}`);
    const body = encodeURIComponent(`Name: ${data.get('name')}\nReply email: ${data.get('email')}\n\n${data.get('message')}`);
    window.location.href = `mailto:${STUDIO_EMAIL}?subject=${subject}&body=${body}`;
  });
})();
