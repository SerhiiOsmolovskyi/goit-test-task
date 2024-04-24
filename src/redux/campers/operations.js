import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCampers = createAsyncThunk(
  "campers/getAll",
  async ({ page = 1, limit = 4 }, thunkApi) => {
    try {
      const { data } = await axios(
        `https://661eac5716358961cd928e17.mockapi.io/adverts?page=${page}&limit=${limit}`
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
