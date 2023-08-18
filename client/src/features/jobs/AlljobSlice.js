import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import CustomFetch from "../../Utilis/axios";
const initialFilterState = {
  search: "",
  searchStatus: "all",
  searchType: "all",
  sort: "latest",
  sortOptions: ["latest", "oldest", "a-z", "z-a"],
};
const initialState = {
  isLoading: false,
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  monthlyApplications: [],
  ...initialFilterState,
};

export const getAllJobs = createAsyncThunk(
  "allJobs/getJobs",
  async (_, thunkAPI) => {
    let url = `/jobs`;
    try {
      const resp = await CustomFetch.get(url, {
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);


const AllJobSlice = createSlice({
  name: "allJobs",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: {
    // --------createjob post -----------
    [getAllJobs.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllJobs.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.jobs = payload.jobs;
    },
    [getAllJobs.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});
export const { showLoading, hideLoading } = AllJobSlice.actions;
export default AllJobSlice.reducer;
