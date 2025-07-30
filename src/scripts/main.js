import Swiper from "swiper";
import { A11y, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import setChangingPage from "./pageLoading";
import { PAGE_AMOUNT } from "../constants/constants";
import { renderItems, renderPageItems } from "./itemsListRender";
import { scrollAddItems } from "./scrollAddItems";
import { changeNumberOfItems } from "./changeItemsInput";
import { closePopUp, openPopUp } from "./popUpHandlers";
import {
  handleClickCloseUnderMenu,
  handleClickSectionName,
  handleCloseBurgerMenu,
  handleOpenBurgerMenu,
} from "./burgerMenu";

new Swiper(".my-swiper", {
  modules: [Navigation, Scrollbar, A11y],
  slidesPerView: 1.1,
  slidesPerGroup: 1,
  spaceBetween: 16,
  watchOverflow: false,
  a11y: true,
  slideClass: "swiper__slide",
  breakpoints: {
    640: { slidesPerView: 2, spaceBetween: 20 },
    864: { slidesPerView: 3, spaceBetween: 24 },
    1280: { slidesPerView: 4, spaceBetween: 24 },
  },
  navigation: {
    nextEl: ".swiper__array--next",
    prevEl: ".swiper__array--prev",
    disabledClass: "swiper__array--hidden",
  },
  scrollbar: {
    el: ".swiper__scrollbar",
    dragClass: "swiper__scrollbar--drag",
    hide: false,
    draggable: true,
  },
});

const selector = document.querySelector(".title__itemsPerPage");
const chosenItem = document.querySelector(".changeItemsInput__option--blocked");
const inputChange = document.querySelector(".changeItemsInput");
const popUpCloseButton = document.querySelector(".popUpContainer__closeButton");
const burgerMenuButton = document.querySelector(".header__burgerMenu");
const burgerMenuCloseButton = document.querySelector(".menu__topBar__closeButton");
const burgerMenu = document.querySelector(".burgerMenu");

setChangingPage(PAGE_AMOUNT[0]);

const handleClickSelector = () => {
  inputChange.classList.toggle("changeItemsInput--hide");
};

selector.addEventListener("click", handleClickSelector);
chosenItem.addEventListener("click", handleClickSelector);
document.addEventListener("scroll", scrollAddItems);
window.addEventListener("resize", handleCloseBurgerMenu);
burgerMenuButton.addEventListener("click", handleOpenBurgerMenu);
burgerMenuCloseButton.addEventListener("click", handleCloseBurgerMenu);
popUpCloseButton.addEventListener("click", closePopUp);
burgerMenu.addEventListener("click", handleClickCloseUnderMenu);
document.addEventListener("click", openPopUp);

renderItems(await renderPageItems());
handleClickSectionName();

changeNumberOfItems(async () => {
  renderItems(await renderPageItems());
});
