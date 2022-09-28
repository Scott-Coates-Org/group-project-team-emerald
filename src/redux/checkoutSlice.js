import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  step: 1,
};

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setStep(state, action) {
      state.step = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setStep } = checkoutSlice.actions;

export default checkoutSlice.reducer;
