import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: { name: "" },
  reducers: {
    nameFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { nameFilter } = slice.actions;
export default slice.reducer;
