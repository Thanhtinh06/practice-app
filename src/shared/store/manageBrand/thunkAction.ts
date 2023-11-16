import brandsApi from "@/shared/api/brandsApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const manageBrands = createAsyncThunk(
  "manageBrand/getAllBrands",
  async (_, { rejectWithValue }) => {
    try {
      const res = await brandsApi.getBrands();
      return res.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
