import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/signup', data);
      return response.data;
    } catch (error) {
      const { status, statusText } = error.response;
      const err = { status, statusText };
      return rejectWithValue(err);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/login', data);
      return response.data;
    } catch (error) {
      const { status, statusText } = error.response;
      const err = { status, statusText };
      return rejectWithValue(err);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/logout');
      return response.data;
    } catch (error) {
      const { status, statusText } = error.response;
      const err = { status, statusText };
      return rejectWithValue(err);
    }
  }
);

export const getCurrent = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const response = await axios.get('/users/current', {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      return response.data;
    } catch (error) {
      const { status, statusText } = error.response;
      const err = { status, statusText };
      return rejectWithValue(err);
    }
  }
);
