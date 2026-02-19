const toggle = document.getElementById("expertiseToggle");
const expertise = document.getElementById("expertise");

toggle.addEventListener("click", function (e) {
  e.preventDefault();

  expertise.classList.remove("hidden");
  expertise.scrollIntoView({ behavior: "smooth" });

  // Optional: prevent repeated clicks
  toggle.style.pointerEvents = "none";
  toggle.style.opacity = "0.6";
});
