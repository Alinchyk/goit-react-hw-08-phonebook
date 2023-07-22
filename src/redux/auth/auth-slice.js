import { createSlice } from '@reduxjs/toolkit';
import { signUp, logIn, logOut, getCurrent } from './auth-operation';

const initialState = {
  user: {},
  isLogin: false,
  token: '',
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(signUp.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
      })
      .addCase(signUp.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(logIn.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
      })
      .addCase(logIn.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(logOut.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logOut.fulfilled, state => {
        state.loading = false;
        state.user = {};
        state.token = '';
        state.isLogin = false;
      })
      .addCase(logOut.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getCurrent.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCurrent.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload;
        state.isLogin = true;
      })
      .addCase(getCurrent.rejected, (state, { payload }) => {
        state.loading = false;
        state.token = '';
        state.error = payload;
      });
  },
});

export default authSlice.reducer;
