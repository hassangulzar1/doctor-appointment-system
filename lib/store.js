import { configureStore } from "@reduxjs/toolkit";
import PatientSlice from "./features/PatientSlice";

export const makeStore = () => {
  return configureStore({
    reducer: { PatientSlice },
  });
};
