import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "modal",
  initialState: { open: false },
  reducers: {
    openCloseModal: state => {
      state.open = !state.open;
    },
  },
});
export default slice.reducer;
export const { openCloseModal } = slice.actions;
export const selectModal = state => state.modal.open;
