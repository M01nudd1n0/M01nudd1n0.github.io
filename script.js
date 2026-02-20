document.addEventListener("DOMContentLoaded", () => {

  const howBtn = document.getElementById("howWorkBtn");
  const howSection = document.getElementById("howWork");

  const expBtn = document.getElementById("expertiseBtn");
  const expertise = document.getElementById("expertise");

  const homeBtn = document.getElementById("homeBtn");

  // Home logo → reset
  homeBtn.addEventListener("click", () => {
    howSection.classList.remove("active");
    expertise.classList.remove("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // HOW I WORK → show layer
  howBtn.addEventListener("click", e => {
    e.preventDefault();

    howSection.classList.add("active");
    howSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  // EXPERTISE → replace HOW I WORK
 expBtn.addEventListener("click", e => {
  e.preventDefault();

  // Remove previous layer
  howSection.classList.remove("active");

  // Activate expertise layer
  expertise.classList.add("active");

  // Force reflow so animation triggers correctly
  expertise.classList.remove("show");
  void expertise.offsetWidth;

  // Animate expertise in
  expertise.classList.add("show");

  expertise.scrollIntoView({ behavior: "smooth", block: "start" });
});

});
