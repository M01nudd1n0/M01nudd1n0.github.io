document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("expertiseToggle");
  const expertise = document.getElementById("expertise");

  if (!toggle || !expertise) return;

  toggle.addEventListener("click", function (e) {
    e.preventDefault(); // 🔴 THIS STOPS PAGE JUMP

    expertise.classList.remove("hidden");
    expertise.scrollIntoView({ behavior: "smooth" });

    // Disable further clicks (expertise stays open)
    toggle.style.pointerEvents = "none";
    toggle.style.opacity = "0.6";
  });
});
