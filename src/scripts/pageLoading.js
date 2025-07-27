const setChangingPage = (amount) => {
  const pageAmount = document.querySelector("[data-itemsPerPage]");

  pageAmount.setAttribute("data-itemsPerPage", amount);
  pageAmount.innerText = amount;
};

export default setChangingPage;
