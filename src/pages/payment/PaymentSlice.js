import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  payments: [],
  selectedPayments: {},
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setPayments: (state, { payload = [] }) => {
      state.payments = payload;
    },
    setSelectedPayments: (state, { payload = [] }) => {
      state.selectedPayments = payload;
    },
  },
});

const { reducer, actions } = paymentSlice;

export const { setPayments, setSelectedPayments } = actions;

export default reducer;
