import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "modal",
  initialState: { open: false, items: { name: "", number: "", id: "" } },
  reducers: {
    openCloseModal: (state, action) => {
      state.open = !state.open;
      state.items = action.payload;
    },
  },
});
export default slice.reducer;
export const { openCloseModal } = slice.actions;
export const selectModal = state => state.modal.open;
export const selectModalItems = state => state.modal.items;
