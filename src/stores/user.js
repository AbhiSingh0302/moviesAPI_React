import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {isLoggedIn: false},
  reducers: {
    loggedIn(state){
        state.isLoggedIn = true;
    },
    loggedOut(state){
        state.isLoggedIn = false;
    }
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
