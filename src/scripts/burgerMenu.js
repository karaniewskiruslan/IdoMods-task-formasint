const burgerMenu = document.querySelector(".burgerMenu");

export const handleCloseBurgerMenu = () => {
  burgerMenu.classList.add("burgerMenu--closed");
};

export const handleOpenBurgerMenu = () => {
  burgerMenu.classList.remove("burgerMenu--closed");
};

export const handleClickSectionName = (e) => {
  const sections = document.querySelectorAll(".menu__nav__page");

  sections.forEach((section) => {
    section.addEventListener("click", handleCloseBurgerMenu);
  });
};

export const handleClickCloseUnderMenu = (e) => {
  const clickedElem = e.target;

  if (clickedElem === burgerMenu) {
    handleCloseBurgerMenu();
  }
};
