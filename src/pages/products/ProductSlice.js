import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  selectedProduct: {},
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, { payload = [] }) => {
      if (!state.products.length && !payload.length) {
        return;
      }

      state.products = payload;
    },

    setSelectedProduct: (state, { payload }) => {
      if (state.selectedProduct._id === payload._id) return;
      state.selectedProduct = payload;
    },
  },
});

const { reducer, actions } = productSlice;

export const { setProducts, setSelectedProduct } = actions;

export default reducer;
