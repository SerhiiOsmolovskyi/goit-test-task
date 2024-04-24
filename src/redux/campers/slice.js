import { createSlice } from "@reduxjs/toolkit";
import { getAllCampers } from "./operations";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    favorite: [],
    page: 1,
    error: null,
    isLoading: false,
  },
  reducers: {
    addFavorite(state, { payload }) {
      state.favorite.push(payload);
    },
    removeFavorite(state, { payload }) {
      const index = state.favorite.findIndex((item) => item._id === payload);

      state.favorite.splice(index, 1);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCampers.pending, (state) => {
        state.page = 1;
        state.error = null;
        state.isLoading = true;
      })
      .addCase(getAllCampers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(getAllCampers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { addFavorite, removeFavorite } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
