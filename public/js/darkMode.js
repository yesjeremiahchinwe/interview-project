/* ------------------ Dark Mode Implementation ----------------- */
document.addEventListener("DOMContentLoaded", () => {
  const darkModeButton = document.querySelector(".darkModeButton");
  const innerdarkModeButton = document.querySelector(
    ".darkModeButton .toggle_wrapper"
  );

  if (localStorage.getItem("darkMode") === "darkModeEnabled") {
    document.body.classList.add("dark-mode");
    innerdarkModeButton.classList.add("justify_right");
  }

  darkModeButton.addEventListener("click", () => {
    const isDarkMode = document.body.classList.toggle("dark-mode");
    localStorage.setItem(
      "darkMode",
      isDarkMode ? "darkModeEnabled" : "darkModeDisabled"
    );
    document.body.classList.toggle("dark-mode");

    if (localStorage.getItem("darkMode") === "darkModeEnabled") {
      document.body.classList.add("dark-mode");
      innerdarkModeButton.classList.add("justify_right");
    } else {
      document.body.classList.remove("dark-mode");
    }
  });
});
