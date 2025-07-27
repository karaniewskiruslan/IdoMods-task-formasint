import Swiper from "swiper";
import { A11y, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import setChangingPage from "./pageLoading";
import { PAGE_AMOUNT } from "../constants/constants";
import { renderItems, renderPageItems } from "./itemsListRender";
import { scrollAddItems } from "./scrollAddItems";

new Swiper(".my-swiper", {
  modules: [Navigation, Scrollbar, A11y],
  slidesPerView: 1.1,
  slidesPerGroup: 1,
  spaceBetween: 16,
  watchOverflow: false,
  a11y: true,
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
  },
});

const selector = document.querySelector(".title__itemsPerPage");

setChangingPage(PAGE_AMOUNT[0]);

const handleClickSelector = () => {
  console.log("111");
};

selector.addEventListener("click", handleClickSelector);

renderItems(await renderPageItems());

document.addEventListener("scroll", scrollAddItems);
