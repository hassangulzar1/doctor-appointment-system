import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  patientData: [],
};

const attendenceDataSlice = createSlice({
  name: "attendence",
  initialState,
  reducers: {
    addingPatientData(state, action) {
      state.patientData = action.payload;
    },
  },
});

export const attendenceDataActions = attendenceDataSlice.actions;
export default attendenceDataSlice.reducer;
