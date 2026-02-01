function showSection(id) {
  document.querySelectorAll('.page-section')
    .forEach(sec => sec.classList.remove('active'));

  document.getElementById(id).classList.add('active');
}
document.getElementById('nav-home').addEventListener('click', () => showSection('home'));
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {

  // Mouse enter → open only this card
  card.addEventListener('mouseenter', () => {
    serviceCards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
  });

  // Mouse leave → close this card
  card.addEventListener('mouseleave', () => {
    card.classList.remove('active');
  });

});
