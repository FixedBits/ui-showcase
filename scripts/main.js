document.addEventListener("DOMContentLoaded", () => {
  // Hero animations
  const heroElements = document.querySelectorAll(".hero .animate-init");
  const scrollElements = document.querySelectorAll("#components .animate-init, footer .animate-init");

  heroElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("animate-active");
    }, index * 200);
  });

  // Scroll-triggered animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-active");

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

  scrollElements.forEach((el) => observer.observe(el));

  // Modal logic
  const modal = document.getElementById("info-modal");
  const closeBtn = document.querySelector(".close-modal");

  document.querySelectorAll(".card-button").forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
