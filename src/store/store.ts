import { configureStore } from "@reduxjs/toolkit";

import productSlice from "./ProductSlice";
import sidebarSlice from "./Sidebar";

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice.reducer,
    products: productSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
