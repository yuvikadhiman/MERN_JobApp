import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import jobSlice from "./features/jobs/AddjobSlice";
import AlljobSlice from "./features/jobs/AlljobSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
    allJobs:AlljobSlice
  },
});
