const burgerButton = document.querySelector(".header-burger-button");
const burgerNavigation = document.querySelector(".header-navigation");
const darkTheme = document.querySelector(".dark-theme");

function burgerMenu() {
  burgerButton.addEventListener("click", () => {
    burgerButton.classList.toggle("header-burger-button-active");
    burgerNavigation.classList.toggle("header-navigation-active");
    darkTheme.classList.toggle("dark-theme-active");
  })
}

export { burgerMenu }
