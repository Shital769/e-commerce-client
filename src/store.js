import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./pages/login/authSlice";
import categoryReducer from "./pages/category/CategorySlice";
import systemReducer from "./system/systemSlice";
import paymentReducer from "./pages/payment/PaymentSlice";

const store = configureStore({
  reducer: {
    user: authReducer,
    category: categoryReducer,
    system: systemReducer,
    payment: paymentReducer,
  },
});

export default store;
