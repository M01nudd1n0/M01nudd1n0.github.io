document.addEventListener("DOMContentLoaded", () => {

  const howBtn = document.getElementById("howWorkBtn");
  const howSection = document.getElementById("howWork");
  const expBtn = document.getElementById("expertiseBtn");
  const expertise = document.getElementById("expertise");
  const tooltip = document.getElementById("tooltip");
  const homeBtn = document.getElementById("homeBtn");

  // Home logo scroll
  homeBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // How I Work reveal
  howBtn.addEventListener("click", e => {
    e.preventDefault();
    howSection.classList.remove("hidden");
    howSection.scrollIntoView({ behavior: "smooth" });
  });

  // Expertise reveal
  expBtn.addEventListener("click", e => {
    e.preventDefault();
    expertise.classList.remove("hidden");
    expertise.scrollIntoView({ behavior: "smooth" });
    expBtn.style.pointerEvents = "none";
    expBtn.style.opacity = "0.6";
  });

  // Tooltip
  document.querySelectorAll(".skill").forEach(skill => {
    skill.addEventListener("mouseenter", e => {
      tooltip.innerText = skill.dataset.info;
      tooltip.style.display = "block";
    });
    skill.addEventListener("mousemove", e => {
      tooltip.style.left = e.pageX + 12 + "px";
      tooltip.style.top = e.pageY + 12 + "px";
    });
    skill.addEventListener("mouseleave", () => {
      tooltip.style.display = "none";
    });
  });

});
