import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./pages/login/authSlice";
import categoryReducer from "./pages/category/CategorySlice";
import systemReducer from "./system/systemSlice";

const store = configureStore({
  reducer: {
    user: authReducer,
    category: categoryReducer,
    system: systemReducer,
  },
});

export default store;
