import { renderItems, renderPageItems } from "./itemsListRender";
import globalState from "./globalState/globalState";

export const scrollAddItems = async () => {
  const scrollBreakpoint = document.body.offsetHeight - window.scrollY <= window.innerHeight * 1.5;

  if (scrollBreakpoint && !globalState.loading) {
    globalState.loading = true;
    renderItems(await renderPageItems());
  }
};
