// Terminal Arcade — Martin Technology LLC
// Minimal JS: mobile nav + scroll animations

// Close mobile nav on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('open');
  });
});

// Intersection Observer for fade-in animations
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // Observe all fade-in elements that aren't in the hero (hero plays immediately)
  document.querySelectorAll('.services-section .fade-in, .pitch-section .fade-in').forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });
}
