import { configureStore } from "@reduxjs/toolkit";
import commentsSlice from "./comments";
import authSlice from "./auth";

export default configureStore({
  reducer: {
    comments: commentsSlice,
    auth: authSlice,
  },
});
