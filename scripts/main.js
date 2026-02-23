document.addEventListener("DOMContentLoaded", () => {
  const heroElements = document.querySelectorAll(".hero .animate-init");
  const scrollElements = document.querySelectorAll("#components .animate-init, footer .animate-init");

  // HERO: animate immediately with stagger
  heroElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("animate-active");
    }, index * 200);
  });

  // GRID + FOOTER: animate only when visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-active");

        // Animate the bar AFTER the card fade-in finishes
        const bar = entry.target.querySelector(".premium-bar-fill");
        if (bar) {
          setTimeout(() => {
            bar.style.width = "70%";
          }, 700); // fade-in is 600ms, so 700ms is perfect
        }

        observer.unobserve(entry.target);
      }
    });
  });

  // Observe ONLY scroll-triggered elements
  scrollElements.forEach((el) => observer.observe(el));
});
