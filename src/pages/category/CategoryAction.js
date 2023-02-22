import { toast } from "react-toastify";
import {
  deleleCategory,
  fetchCategory,
  postCategory,
  updateCategory,
} from "../../helper/axios";

import { setCategories } from "./CategorySlice";

export const fetchCategories = () => async (dispatch) => {
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

  status === "success" && dispatch(fetchCategories());
};

export const deleleCategory = (_id) => async (dispatch) => {
  const resultPending = deleleCategory(_id);

  toast.promise(resultPending, {
    pending: "Please wait ...",
  });

  const { status, message } = await resultPending;

  toast[status](message);

  status === "success" && dispatch(fetchCategories());
};


export const updateCategory = (data) => async(dispatch) => {
    const resultPending = updateCategory(data)

    toast.promise(resultPending, {
        pending: "Please wait ..."
    })

    const {status, mesasge} = await resultPending

    toast[status](message)
    status === "success" && dispatch(fetchCategories())
}