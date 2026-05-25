function getBasePath() {
  const parts = window.location.pathname.split("/").filter(Boolean);
  const fileName = parts[parts.length - 1] || "index.html";

  if (fileName === "index.html") {
    return "";
  }

  return "../";
}

async function loadComponent(id, file) {
  const container = document.getElementById(id);
  if (!container) return;

  const basePath = getBasePath();
  const response = await fetch(basePath + file);
  const html = await response.text();

  container.innerHTML = html;
  fixRootLinks(container, basePath);
}

function fixRootLinks(container, basePath) {
  const links = container.querySelectorAll("[data-root-link]");

  links.forEach(link => {
    link.href = basePath + link.dataset.rootLink;
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadComponent("header-container", "partials/header.html");
  await loadComponent("menu-container", "partials/menu.html");
  await loadComponent("footer-container", "partials/footer.html");

  restoreDarkMode();
});
