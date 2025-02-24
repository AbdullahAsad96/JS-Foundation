// Typing effect for hero
const nameElement = document.querySelector('.name');
const text = nameElement.textContent;
nameElement.textContent = '';
let i = 0;
function type() {
  if (i < text.length) {
    nameElement.textContent += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}
type();

// Smooth scroll
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Fade-in projects
window.addEventListener('scroll', () => {
  document.querySelectorAll('.project-card').forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.style.opacity = 1;
      card.style.transition = 'opacity 0.5s';
    }
  });
});