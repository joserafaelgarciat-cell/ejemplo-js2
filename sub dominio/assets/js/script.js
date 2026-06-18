document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button');
      const original = btn.textContent;
      btn.textContent = 'Enviado ✓';
      btn.style.background = '#28a745';
      setTimeout(() => {
        btn.textContent = original;
        btn.style.background = '';
        form.reset();
      }, 2500);
    });
  }
});
