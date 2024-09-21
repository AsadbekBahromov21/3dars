import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlices";
import { api } from "../api";
import cartSlices from "../slices/cartSlices";
export const store = configureStore({
  reducer: {
    cart: cartSlices,
    auth: authReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
