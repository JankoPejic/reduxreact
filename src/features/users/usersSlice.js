import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '0', name: 'First Post!' },
  { id: '1', name: 'First Tost!' },
  { id: '2', name: 'Second Post' },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
