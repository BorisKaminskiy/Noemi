const burgerButton = document.querySelector(".header-burger-button");
const burgerNavigation = document.querySelector(".header-navigation");

function burgerMenu() {
  burgerButton.addEventListener("click", () => {
    burgerButton.classList.toggle("header-burger-button-active");
    burgerNavigation.classList.toggle("header-navigation-active");
  })
}

export { burgerMenu }