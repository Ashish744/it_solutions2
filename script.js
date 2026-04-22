 // RUN AFTER DOM LOAD
document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     DARK MODE
  ========================= */
  const toggleBtn = document.getElementById("darkModeToggle");

  if (toggleBtn) {
    // Load saved theme
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
      toggleBtn.innerText = "☀️";
    }

    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        toggleBtn.innerText = "☀️";
      } else {
        localStorage.setItem("theme", "light");
        toggleBtn.innerText = "🌙";
      }
    });
  }
  const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
}

  /* =========================
     TYPE EFFECT (SAFE)
  ========================= */
  const typeEl = document.getElementById("typeText");

  if (typeEl) {
    const text = "Transforming Ideas into Technology";
    let i = 0;

    const typeEffect = () => {
      if (i < text.length) {
        typeEl.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 50);
      }
    };

    typeEffect();
  }

  /* =========================
     SCROLL ANIMATION
  ========================= */
  const animateEls = document.querySelectorAll(".animate");

  if (animateEls.length > 0) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    animateEls.forEach(el => observer.observe(el));
  }

  /* =========================
     COUNTER (VISIBLE ONLY)
  ========================= */
  const counters = document.querySelectorAll(".counter");

  if (counters.length > 0) {
    const counterObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCounter(entry.target);
          counterObserver.unobserve(entry.target); // run only once
        }
      });
    });

    counters.forEach(counter => {
      counterObserver.observe(counter);
    });
  }

});


/* =========================
   COUNTER FUNCTION
========================= */
function startCounter(counter) {
  const target = parseInt(counter.getAttribute("data-target"));
  let count = 0;

  const update = () => {
    const speed = target / 100;

    if (count < target) {
      count += speed;
      counter.innerText = Math.ceil(count);
      requestAnimationFrame(update);
    } else {
      counter.innerText = target;
    }
  };

  update();
}

const navLinks = document.getElementById("navLinks");
const menuOpen = document.getElementById("menuOpen");
const menuClose = document.getElementById("menuClose");

// OPEN MENU
menuOpen.addEventListener("click", () => {
  navLinks.style.right = "0";
});

// CLOSE MENU
menuClose.addEventListener("click", () => {
  navLinks.style.right = "-250px";
});
