const tooltip = document.getElementById("tooltip");
const skills = document.querySelectorAll(".skill");

skills.forEach(skill => {
  skill.addEventListener("mouseenter", e => {
    tooltip.innerText = skill.dataset.info;
    tooltip.style.display = "block";
  });

  skill.addEventListener("mousemove", e => {
    tooltip.style.left = e.pageX + 15 + "px";
    tooltip.style.top = e.pageY + 15 + "px";
  });

  skill.addEventListener("mouseleave", () => {
    tooltip.style.display = "none";
  });
});
