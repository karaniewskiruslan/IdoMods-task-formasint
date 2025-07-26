import Swiper from "swiper";
import { A11y, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const getAPI = async () => {
  const url = "https://brandstestowy.smallhost.pl/api/random";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (e) {
    return console.error(`Warning! Cannot get API data. Reason: , ${e}`);
  }
};

new Swiper(".my-swiper", {
  modules: [Navigation, Scrollbar, A11y],
  slidesPerView: 1.1,
  slidesPerGroup: 1,
  spaceBetween: 16,
  watchOverflow: false,
  a11y: true,
  breakpoints: {
    640: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 24 },
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
