import { createSlice } from "@reduxjs/toolkit";

const ActiveLinkSlice = createSlice({
  name: "activeLink",
  initialState: -1,
  reducers: {
    setActiveLink(state, action) {
      return action.payload;
    },
  },
});

export const activeLinkReducer = ActiveLinkSlice.reducer;
export const { setActiveLink } = ActiveLinkSlice.actions;
