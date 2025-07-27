import { PAGE_AMOUNT } from "../../constants/constants";

export const global = {
  itemsList: [],
  itemsPerPage: PAGE_AMOUNT[0],
  page: 1,
  initialRender: true,
  loading: false,
};

export default global;
