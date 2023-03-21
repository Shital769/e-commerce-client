import { toast } from "react-toastify";
import { setProducts, setSelectedProduct } from "./ProductSlice";
import {
  fetchProduct,
  postProduct,
  updateProduct,
  deleteProduct,
} from "../../helper/axios";

export const getProductAction = () => async (dispatch) => {
  const { status, products } = await fetchProduct();

  status === "success" && dispatch(setProducts(products));
};

export const getSelectedProductAction = (_id) => async (dispatch) => {
  const { status, products } = await fetchProduct(_id);

  status === "success" && dispatch(setSelectedProduct(products));
};

export const postProductAction = (obj) => async (dispatch) => {
  const responsePromise = postProduct(obj);

  toast.promise(responsePromise, {
    pending: "Please wait ...",
  });

  const { status, message } = await responsePromise;

  toast[status](message);

  status === "success" && dispatch(getProductAction());
};

export const updateProductAction = (obj) => async (dispatch) => {
  const responsePromise = updateProduct(obj);

  toast.promise(responsePromise, {
    pending: "Please wait...",
  });

  const { status, message } = await responsePromise;

  toast[status](message);

  status === "success" && dispatch(getSelectedProductAction(obj._id));
};

export const deleteProductAction = (arr) => async (dispatch) => {
  const responsePromise = deleteProduct(arr);

  toast.promise(responsePromise, { pending: "Please wait..." });

  const { status, message } = await responsePromise;

  toast[status](message);

  status === "success" && dispatch(getProductAction());
};
