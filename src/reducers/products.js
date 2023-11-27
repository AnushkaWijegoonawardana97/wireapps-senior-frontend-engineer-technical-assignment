import {
  GET_CATEGORY_LIST,
  GET_PRODUCT_BY_CATEGORY,
  GET_PRODUCT_LIST,
} from "../actions/types";

const initialState = {
  loading: true,
  productList: [],
  categoryList: [],
  productByCategory: [],
};

const products = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_PRODUCT_LIST:
      return {
        ...state,
        productList: payload,
        loading: false,
      };
    case GET_CATEGORY_LIST:
      return {
        ...state,
        categoryList: payload,
        loading: false,
      };
    case GET_PRODUCT_BY_CATEGORY:
      return {
        ...state,
        productByCategory: payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default products;
