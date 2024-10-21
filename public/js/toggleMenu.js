
document.addEventListener("DOMContentLoaded", () => {
  /* -------------- Menu Open/Close Implementation ------------------ */
  const desktopMenuIcon = document.querySelector(".logo .menu_desktop");
  const mobileMenuIconWrapper = document.querySelector(".menu_mobile");
  const mobileMenuIcon = document.querySelector(".menu_mobile i")
  const sidebarElement = document.querySelector("aside");
  const h1Element = document.querySelector("header h1");
  const notificationOnCollapse = document.querySelector(".notification_on_collape")

  desktopMenuIcon.addEventListener("click", () => {
    sidebarElement.classList.toggle("show_aside_element");
    h1Element.classList.toggle("show_h1_element");
    notificationOnCollapse.classList.toggle("showNotification")
  });

  mobileMenuIconWrapper.addEventListener("click", () => {
    sidebarElement.classList.toggle("show_mobile_nav");

    if (mobileMenuIcon.classList.contains("bi-filter-right")) {
      mobileMenuIcon.classList.remove("bi-filter-right")
      mobileMenuIcon.classList.add("bi-x")
    } else {
      mobileMenuIcon.classList.remove("bi-x")
      mobileMenuIcon.classList.add("bi-filter-right")
    }
  });

})
