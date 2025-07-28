"use strict";

import { createItemBanner } from "./createItemBanner";
import getPagePhoto from "./getPagePhoto";
import global from "./globalState/globalState";

const createItemElement = (item) => {
  const { id, text, image } = item;

  const idText = `id: ${id < 10 ? "0" + id : id}`;

  const productItem = document.createElement("div");
  productItem.classList.add("itemsList__productItem", "productItem");
  const productContainer = document.createElement("div");
  productContainer.classList.add("productItem__container");
  const productIDtext = document.createElement("p");
  productIDtext.setAttribute("data-bodyText", "");
  productIDtext.innerText = idText;
  const productImg = document.createElement("img");
  productImg.src = image;
  productImg.alt = text;
  productImg.setAttribute("loading", "lazy");

  productContainer.appendChild(productIDtext);
  productContainer.appendChild(productImg);

  productItem.appendChild(productContainer);

  return productItem;
};

export const renderPageItems = async () => {
  console.log(global)
  const items = await getPagePhoto(global.page, global.itemsPerPage);

  global.page++;
  global.itemsList.push(...items);
  global.itemsList = [...new Set(global.itemsList)];
  global.loading = false;

  return global.itemsList;
};

export const renderItems = (list = []) => {
  const itemsContainer = document.querySelector("[data-itemsList]");
  itemsContainer.innerHTML = "";

  list.forEach((item, i) => {
    if (global.initialRender) {
      const banner = createItemBanner();
      itemsContainer.appendChild(banner);
      // global.initialRender = false;
    }

    const newElement = createItemElement(item);
    itemsContainer.appendChild(newElement);
  });
};
