function toggleDarkMode() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("darkMode", "true");
  } else {
    localStorage.setItem("darkMode", "false");
  }
}

function restoreDarkMode() {
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
  }
}

function filterSections() {
  const searchBox = document.getElementById("searchBox");
  if (!searchBox) return;

  const query = searchBox.value.toLowerCase().trim();
  const sections = document.querySelectorAll("main section");

  sections.forEach(section => {
    const text = section.innerText.toLowerCase();
    section.classList.toggle("hidden", query && !text.includes(query));
  });
}
