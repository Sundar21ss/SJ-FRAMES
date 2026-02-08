/* =========================
   PAGE SECTION CONTROL
========================= */
function showSection(id) {

  document.querySelectorAll('.page-section')
    .forEach(section => section.classList.remove('active'));

  const target = document.getElementById(id);
  if (target) target.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* =========================
   SERVICES – DESKTOP + MOBILE
========================= */
const serviceCards = document.querySelectorAll('.service-card');

/* Desktop hover */
serviceCards.forEach(card => {

  card.addEventListener('mouseenter', () => {
    if (window.innerWidth > 768) {
      closeAllServices();
      card.classList.add('active');
    }
  });

  card.addEventListener('mouseleave', () => {
    if (window.innerWidth > 768) {
      card.classList.remove('active');
    }
  });

});

/* Mobile tap */
serviceCards.forEach(card => {
  card.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.stopPropagation();

      const isOpen = card.classList.contains('active');
      closeAllServices();

      if (!isOpen) card.classList.add('active');
    }
  });
});

/* Tap outside → close */
document.addEventListener('click', () => {
  if (window.innerWidth <= 768) {
    closeAllServices();
  }
});

/* Helper */
function closeAllServices() {
  serviceCards.forEach(c => c.classList.remove('active'));
}
