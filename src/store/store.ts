import { configureStore } from "@reduxjs/toolkit";

import productSlice from "./ProductSlice";
import sidebarSlice from "./SidebarSlice";
import cartSlice from "./CartSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice.reducer,
    products: productSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
