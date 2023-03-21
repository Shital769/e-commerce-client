import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./pages/login/authSlice";
import categoryReducer from "./pages/category/CategorySlice";
import systemReducer from "./system/systemSlice";
import paymentReducer from "./pages/payment/PaymentSlice";
import productReducer from "./pages/products/ProductSlice";

const store = configureStore({
  reducer: {
    user: authReducer,
    category: categoryReducer,
    system: systemReducer,
    payment: paymentReducer,
    product: productReducer,
  },
});

export default store;
