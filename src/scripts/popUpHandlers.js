import globalState from "./globalState/globalState";

export const closePopUp = () => {
  const popUp = document.querySelector(".zoomedImagePopUp");
  popUp.classList.add("zoomedImagePopUp--closed");
};

export const openPopUp = (e) => {
  const zoomedPhoto = e.target.closest(".productItem");

  if (!zoomedPhoto) return;

  const fullItemsList = [...document.querySelectorAll(".productItem")];
  const zoomedPhotoI = fullItemsList.indexOf(zoomedPhoto);
  const popUpContent = globalState.itemsList[zoomedPhotoI];

  if (!popUpContent) return;

  const popUp = document.querySelector(".zoomedImagePopUp");
  popUp.classList.remove("zoomedImagePopUp--closed");

  const { id, text, image } = popUpContent;
  const popUpImage = document.querySelector(".popUpContainer__image");
  const popUpIDText = document.querySelector(".popUpContainer__idText");

  const idText = `id: ${id < 10 ? "0" + id : id}`;

  popUpImage.src = image;
  popUpImage.alt = text;
  popUpIDText.innerText = idText;
};
