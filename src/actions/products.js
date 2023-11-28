import axios from "axios";
import { API_PATH, CONFIG } from "../utilites/constants";
import {
  ERRORS,
  GET_CATEGORY_LIST,
  GET_PRODUCT_BY_CATEGORY,
  GET_PRODUCT_LIST,
} from "./types";

export const getCategoryList = () => async (dispatch) => {
  const subStr = "clothing";
  try {
    const response = await axios.get(`${API_PATH}products/categories`, CONFIG);

    const categoryData = response.data.filter((str) => str.includes(subStr));

    dispatch({
      type: GET_CATEGORY_LIST,
      payload: categoryData,
    });
  } catch (error) {
    const errors = error.response.data.errors;

    dispatch({
      type: ERRORS,
      payload: errors,
    });
  }
};

export const getProductsList = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API_PATH}products?limit=4`, CONFIG);

    dispatch({
      type: GET_PRODUCT_LIST,
      payload: response.data,
    });
  } catch (error) {
    const errors = error.response.data.errors;

    dispatch({
      type: ERRORS,
      payload: errors,
    });
  }
};

export const getProductByCategory = (categoryName) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${API_PATH}products/category/${categoryName}`,
      CONFIG
    );

    dispatch({
      type: GET_PRODUCT_BY_CATEGORY,
      payload: response.data,
    });
  } catch (error) {
    const errors = error.response.data.errors;

    dispatch({
      type: ERRORS,
      payload: errors,
    });
  }
};
