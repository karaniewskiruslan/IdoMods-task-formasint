import { PAGE_AMOUNT } from "../constants/constants";
import global from "./globalState/globalState";

const changeItemsInput = () => {
  const currentItems = document.querySelector(".changeItemsInput__option--current");
  const currentItemsTitle = document.querySelector("[data-itemsPerPage]");
  const options = [...document.querySelectorAll(".changeItemsInput__option:not(.changeItemsInput__option--blocked)")];

  if (!currentItems) return;

  const itemsPerPage = global.itemsPerPage;
  const remainOptions = PAGE_AMOUNT.filter((el) => el !== itemsPerPage);

  currentItems.innerText = itemsPerPage;
  currentItemsTitle.innerText = itemsPerPage;
  currentItemsTitle.setAttribute("data-itemsPerPage", itemsPerPage);
  options.forEach((option, i) => {
    option.innerText = remainOptions[i];
  });
};

export const changeNumberOfItems = (onChange = () => {}) => {
  const optionChoice = document.querySelector(".changeItemsInput__options");
  const inputChange = document.querySelector(".changeItemsInput");

  optionChoice.addEventListener("click", async (e) => {
    const option = e.target.closest(".changeItemsInput__option:not(.changeItemsInput__option--blocked)");

    console.log(option);
    if (!option) return;

    const chosenOption = Number(option.innerText);

    if (!PAGE_AMOUNT.includes(chosenOption)) return;
    if (chosenOption === global.itemsPerPage) {
      if (inputChange) inputChange.classList.add("changeItemsInput--hide");
      return;
    }

    global.itemsPerPage = chosenOption;
    global.itemsList = [];
    global.initialRender = false;
    global.page = 1;

    console.log(global);

    changeItemsInput();

    await onChange(chosenOption);

    if (inputChange) inputChange.classList.add("changeItemsInput--hide");
  });

  // changeItemsInput();
};
