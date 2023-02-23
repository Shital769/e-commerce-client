import { toast } from "react-toastify";
import {
  deleleCategories,
  fetchCategory,
  postCategory,
  updateCategories,
} from "../../helper/axios";

import { setCategories } from "./CategorySlice";

export const fetchCats = () => async (dispatch) => {
  const { status, categories } = await fetchCategory();
  console.log(categories);

  status === "success" && dispatch(setCategories(categories));
};

export const postNewCategory = (data) => async (dispatch) => {
  const resultPending = postCategory(data);

  toast.promise(resultPending, {
    pending: "Please wait ...",
  });

  const { status, message } = await resultPending;
  toast[status](message);

  status === "success" && dispatch(fetchCats());
};

export const deleleCat = (_id) => async (dispatch) => {
  const resultPending = deleleCategories(_id);

  toast.promise(resultPending, {
    pending: "Please wait ...",
  });

  const { status, message } = await resultPending;

  toast[status](message);

  status === "success" && dispatch(fetchCats());
};

export const updateCat = (data) => async (dispatch) => {
  const resultPending = updateCategories(data);

  toast.promise(resultPending, {
    pending: "Please wait ...",
  });

  const { status, message } = await resultPending;

  toast[status](message);
  status === "success" && dispatch(fetchCats());
};
