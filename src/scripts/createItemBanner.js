export const createItemBanner = () => {
  const itemBannerContainer = document.createElement("div");
  itemBannerContainer.classList.add("itemsList__banner");

  const itemBannerTitle = document.createElement("hgroup");
  itemBannerTitle.classList.add("itemsList__title");
  const p = document.createElement("p");
  p.setAttribute("data-bodyText", "");
  p.innerText = "Forma’sint.";
  const h2 = document.createElement("h2");
  h2.innerText = "You'll look and feel like the champion.";

  const itemBannerButton = document.createElement("button");
  itemBannerButton.classList.add("itemsList__button");
  const a = document.createElement("a");
  a.href = "#featuredProduct";
  const pButton = document.createElement("p");
  pButton.setAttribute("data-bodyText", "");
  pButton.innerText = "Check this out";
  const img = document.createElement("img");
  img.src = "/IdoMods-task-formasint/icons/ICONSchevron_right.svg";
  img.alt = "Check this out";

  a.appendChild(pButton);
  a.appendChild(img);
  itemBannerButton.appendChild(a);

  itemBannerTitle.appendChild(p);
  itemBannerTitle.appendChild(h2);

  itemBannerContainer.appendChild(itemBannerTitle);
  itemBannerContainer.appendChild(itemBannerButton);

  return itemBannerContainer;
};
