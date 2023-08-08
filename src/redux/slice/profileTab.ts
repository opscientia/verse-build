import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentTab: 'selectProfile',
  // currentTab: null,
  profileData: null,
};


export const profileTab = createSlice({
  name: 'profileTab',
  initialState,
  reducers: {
    selectCurrentTab: (state, action) => {
      state.currentTab = action.payload;
    },
    userProfileData: (state: any, action: any) => {
      state.profileData = action.payload;
    },
  },
});

export const { selectCurrentTab, userProfileData, } = profileTab.actions;
export default profileTab.reducer;