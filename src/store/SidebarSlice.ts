import { createSlice } from "@reduxjs/toolkit";
// if there is payload, we need import PayloadAction
// action will be action: PayloadAction<the playload type define here>

type InitalStateProps = {
  isOpen: boolean;
};

const initialState: InitalStateProps = {
  isOpen: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export default sidebarSlice;
export const { toggleSidebar } = sidebarSlice.actions;
