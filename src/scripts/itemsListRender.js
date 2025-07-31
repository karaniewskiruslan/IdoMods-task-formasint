"use strict";

import { createItemBanner } from "./createItemBanner";
import getPagePhoto from "./getPagePhoto";
import globalState from "./globalState/globalState";

const createItemElement = (item) => {
  const { id, text, image } = item;

  const idText = `id: ${id < 10 ? "0" + id : id}`;

  const productItem = document.createElement("div");
  productItem.classList.add("itemsList__productItem", "productItem");
  const productContainer = document.createElement("div");
  productContainer.classList.add("productItem__container");
  const productIDtext = document.createElement("p");
  productIDtext.setAttribute("data-special", "");
  productIDtext.innerText = idText;
  const productImg = document.createElement("img");
  productImg.src = image;
  productImg.decoding = "async";
  productImg.alt = text;
  productImg.setAttribute("loading", "lazy");

  productContainer.appendChild(productIDtext);
  productContainer.appendChild(productImg);

  productItem.appendChild(productContainer);

  return productItem;
};

export const renderPageItems = async () => {
  const items = await getPagePhoto(globalState.page, globalState.itemsPerPage);

  globalState.page++;
  globalState.itemsList = [...globalState.itemsList, ...items];
  globalState.loading = false;

  return globalState.itemsList;
};

export const renderItems = (list = []) => {
  const itemsContainer = document.querySelector("[data-itemsList]");
  itemsContainer.innerHTML = "";

  list.forEach((item, i) => {
    if (globalState.initialRender) {
      const banner = createItemBanner();
      itemsContainer.appendChild(banner);
    }

    const newElement = createItemElement(item);
    itemsContainer.appendChild(newElement);
  });
};
