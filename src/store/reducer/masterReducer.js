import { createSlice } from "@reduxjs/toolkit";

export const masterSlice = createSlice({
  name: 'master',
  initialState: { user: null },
  reducers: {
    updateMasterState: (state, action) => {
      state.user = action.payload.user
    }
  }
})

// Export Actions
export const { updateMasterState } = masterSlice.actions
export default masterSlice.reducer