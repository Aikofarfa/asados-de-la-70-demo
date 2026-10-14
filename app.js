const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#nav-principal');

navToggle?.addEventListener('click', () => {
  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!isOpen));
  navToggle.setAttribute('aria-label', isOpen ? 'Abrir menú' : 'Cerrar menú');
  nav.classList.toggle('is-open', !isOpen);
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navToggle?.setAttribute('aria-expanded', 'false');
    navToggle?.setAttribute('aria-label', 'Abrir menú');
    nav.classList.remove('is-open');
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navToggle?.getAttribute('aria-expanded') === 'true') {
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Abrir menú');
    nav.classList.remove('is-open');
    navToggle.focus();
  }
});

const categoryButtons = [...document.querySelectorAll('[data-category]')];
const menuGroups = [...document.querySelectorAll('[data-menu-group]')];
categoryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;
    categoryButtons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle('is-active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    menuGroups.forEach((group) => {
      const selected = group.dataset.menuGroup === category;
      group.hidden = !selected;
      group.classList.toggle('is-current', selected);
    });
  });
});

const dateInput = document.querySelector('#guest-date');
if (dateInput) {
  const today = new Date();
  const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  dateInput.min = localToday;
}

const reservationForm = document.querySelector('#reservation-form');
const status = document.querySelector('#form-status');
reservationForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!reservationForm.reportValidity()) return;

  const values = new FormData(reservationForm);
  const name = String(values.get('name')).trim();
  const date = String(values.get('date'));
  const time = String(values.get('time'));
  const people = String(values.get('people'));
  const message = `Hola, soy ${name}. Quisiera solicitar una reserva para ${people} el ${date} a las ${time} en Asados de la 70. ¿Me confirman disponibilidad?`;
  const whatsappUrl = `https://wa.me/573244762176?text=${encodeURIComponent(message)}`;
  const opened = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

  status.textContent = opened
    ? 'Se abrió WhatsApp con tu solicitud. Envíala allí y espera la confirmación del restaurante.'
    : 'Tu navegador bloqueó la nueva pestaña. Usa el botón de WhatsApp para continuar.';
});
