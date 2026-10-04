const menuButton = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".nav-left");

menuButton?.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "✕" : "☰";
});

document.querySelector("#year").textContent = new Date().getFullYear();

// This is a visual portfolio template: replace the demo artwork and contact details
// with your own. The cart count is intentionally a non-commerce placeholder.
