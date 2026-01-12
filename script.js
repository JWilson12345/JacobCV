// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Auto-highlight current page in nav
const current = (location.pathname.split("/").pop() || "index.html").toLowerCase();
document.querySelectorAll(".top-nav a.nav-btn").forEach((link) => {
  const href = (link.getAttribute("href") || "").toLowerCase();
  if (href === current) link.classList.add("active");
});

// Sidebar toggle (mobile/tablet)
const body = document.body;
const menuBtn = document.querySelector(".menu-btn");
const backdrop = document.querySelector(".backdrop");

function openSidebar(){
  body.classList.add("sidebar-open");
  if (menuBtn) menuBtn.setAttribute("aria-label", "Close menu");
}

function closeSidebar(){
  body.classList.remove("sidebar-open");
  if (menuBtn) menuBtn.setAttribute("aria-label", "Open menu");
}

if (menuBtn){
  menuBtn.addEventListener("click", () => {
    body.classList.contains("sidebar-open") ? closeSidebar() : openSidebar();
  });
}

if (backdrop){
  backdrop.addEventListener("click", closeSidebar);
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeSidebar();
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 920) closeSidebar();
});

