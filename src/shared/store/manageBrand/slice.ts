import { createSlice } from "@reduxjs/toolkit";
import { manageBrands } from "./thunkAction";
import { Brand } from "@/shared/types/brand";

type InitialState = {
  brandList?: Brand[];
};

const initialState: InitialState = {
  brandList: [],
};

export const { reducer: manageBrandReducer, actions: manageBrandActions } =
  createSlice({
    name: "manageBrand",
    initialState,
    reducers: {},
    extraReducers(builder) {
      builder.addCase(manageBrands.fulfilled, (state, action) => {
        state.brandList = action.payload;
      });
    },
  });
