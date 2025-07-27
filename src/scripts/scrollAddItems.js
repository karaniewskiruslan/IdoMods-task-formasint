import { renderItems, renderPageItems } from "./itemsListRender";
import global from "./globalState/globalState";

export const scrollAddItems = async () => {
  const scrollBreakpoint = document.body.offsetHeight - window.scrollY <= window.innerHeight * 1.5;

  if (scrollBreakpoint && !global.loading) {
    global.loading = true;
    renderItems(await renderPageItems());
  }
};
