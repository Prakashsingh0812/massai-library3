import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    user: null,
    userList: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.userList.push(action.payload);
    },
    removeUser: (state, action) => {
      state.userList = state.userList.filter((user) => user.id !== action.payload);
    },
    loginUser: (state, action) => {
      state.user = action.payload; // Store the logged-in user
    },
    logoutUser: (state) => {
      state.user = null; // Clear the user on logout
    },
  },
});

export const { addUser, removeUser, loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
