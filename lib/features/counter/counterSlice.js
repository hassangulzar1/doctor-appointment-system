import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 0,
};

const counterDataSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
  },
});

export const counterAction = counterDataSlice.actions;
export default counterDataSlice.reducer;
