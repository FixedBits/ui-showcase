document.addEventListener("DOMContentLoaded", () => {
  const heroElements = document.querySelectorAll(".hero .animate-init");
  const scrollElements = document.querySelectorAll("#components .animate-init, footer .animate-init");

  // Hero: animate immediately with stagger
  heroElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("animate-active");
    }, index * 200);
  });

  // Scroll-triggered animations (grid + footer)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-active");

        // Premium bar: animate after fade-in
        const bar = entry.target.querySelector(".premium-bar-fill");
        if (bar) {
          setTimeout(() => {
            bar.style.width = "70%";
          }, 700);
        }

        observer.unobserve(entry.target);
      }
    });
  });

  // Observe scroll-triggered elements
  scrollElements.forEach((el) => observer.observe(el));
});
