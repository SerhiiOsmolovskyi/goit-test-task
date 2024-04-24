import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCampers = createAsyncThunk(
  "campers/getAll",
  async (_, thunkApi) => {
    try {
      const { data } = await axios(
        "https://661eac5716358961cd928e17.mockapi.io/adverts"
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
