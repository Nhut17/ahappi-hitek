import {UserType} from './../model/userModel';
import {createSlice} from '@reduxjs/toolkit';
import {authService} from './authServices';

export interface UserState {
  user: UserType | undefined;
}

const initialState: UserState = {
  user: undefined,
};

const authSlice = createSlice({
  name: 'authReducer',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      authService.endpoints.loginAuth.matchFulfilled,
      (state, action) => {
        state.user = action.payload;
      },
    );
  },
});

const authReducer = authSlice.reducer;
export default authReducer;
