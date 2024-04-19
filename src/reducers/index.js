import { createSlice } from '@reduxjs/toolkit';
import { DEFAULTPROFILES } from "../utils/constants";

const initialState = {
  profiles: DEFAULTPROFILES,
}

export const profileSlice = createSlice({
  name: 'profiles',
  initialState,
  reducers: {
    updateStore: (state, action) => {
      state.profiles = action.payload
    },
  },
})

export const { updateStore } = profileSlice.actions;

export default profileSlice.reducer;