import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { manageBrandReducer } from "./manageBrand/slice";

export const store = configureStore({
  reducer: {
    manageBrands: manageBrandReducer,
  },
});

export type RootState = ReturnType<(typeof store)["getState"]>;
export type AppDispatch = (typeof store)["dispatch"];
export const useAppDispatch: () => AppDispatch = useDispatch;
