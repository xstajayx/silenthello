// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Accordion (accessible)
document.querySelectorAll("[data-accordion] .accordion-trigger").forEach((btn) => {
  btn.addEventListener("click", () => {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    const panelId = btn.getAttribute("aria-controls");
    const panel = document.getElementById(panelId);

    btn.setAttribute("aria-expanded", String(!expanded));
    if (panel) panel.hidden = expanded;
  });
});

// Mobile nav
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("primaryNav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}
