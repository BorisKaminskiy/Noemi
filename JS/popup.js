const popupForm = document.querySelector(".popup")
// const popupButton = document.querySelector(".popup-button");
// const blockBackground = document.querySelector(".header-main");
const darkTheme = document.querySelector(".dark-theme");

function popup() {
  setTimeout(() => {
    popupForm.classList.add("popup-active");
    darkTheme.classList.add("dark-theme-active");
    // blockBackground.classList.add("header-main-active");
    window.addEventListener("click", (event) => {
      if (popupForm.classList.contains("popup-active") && !event.target.closest(".popup-form")) {
        popupForm.classList.remove("popup-active");
        darkTheme.classList.remove("dark-theme-active");
      }
    })
  }, 2000)
}

export { popup }