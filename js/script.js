const sections = document.querySelectorAll('.js-scroll');
const windowMetade = window.innerHeight * 0.6;

function animaScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const isSectionVisible = sectionTop - windowMetade < 0;
    if (isSectionVisible) {
      section.classList.add('scroll-animado');
    } else {
      section.classList.remove('scroll-animado');
    }
  });

  window.addEventListener('scroll', animaScroll);
}

animaScroll();
