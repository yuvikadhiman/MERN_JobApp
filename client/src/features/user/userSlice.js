import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import CustomFetch from "../../Utilis/axios";

import {
  getUserFromLocalStorage,
  addUserToLocalStorage,
  removeUserFromLocalStorage,
} from "../../Utilis/localStorage";

const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  user: getUserFromLocalStorage(),
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    try {
      const resp = await CustomFetch.post("/auth/register", user);
      console.log("registered");
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);
// user ->expects and object that returns to backend by thrunkApi

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    try {
      const resp = await CustomFetch.post("/auth/login", user);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (user, thunkAPI) => {
    try {
      const res = await CustomFetch.patch("/auth/updateUser", user);
      console.log(res.data)
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  // reducers->action fuctions to change the state
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    logoutUser: (state) => {
      state.user = null;
      state.isSidebarOpen = false;
      removeUserFromLocalStorage();
    },
  },
  extraReducers: {
    // ------register post----------------
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.isLoading = false;
      state.user = user;
      addUserToLocalStorage(user);
      toast.success(`Hello there ${user.name}`);
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

    // -----login post-------------
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.isLoading = false;
      state.user = user;
      addUserToLocalStorage(user);
      toast.success(`Welcome back ${user.name}`);
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

    // ----update patch--------------
    [updateUser.pending]: (state) => {
      state.isLoading = true;
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.isLoading = false;
      state.user = user;
      addUserToLocalStorage(user);
      toast.success(`Your Profile is Updated`);
    },
    [updateUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});
export const { toggleSidebar, logoutUser } = userSlice.actions;
export default userSlice.reducer;
